const riskColors = {
  "Exercise normal safety precautions": {
    label: "Normal",
    classes: "bg-green-100 text-green-700",
  },
  "Exercise a high degree of caution": {
    label: "Caution",
    classes: "bg-yellow-100 text-yellow-700",
  },
  "Reconsider your need to travel": {
    label: "High Risk",
    classes: "bg-orange-100 text-orange-700",
  },
  "Do not travel": { label: "Extreme", classes: "bg-red-100 text-red-700" },
};

const levels = [
  { phrase: "Do not travel", number: "Level 4" },
  { phrase: "Reconsider your need to travel", number: "Level 3" },
  { phrase: "Exercise a high degree of caution", number: "Level 2" },
  { phrase: "Exercise normal safety precautions", number: "Level 1" },
];

const cleanText = (text) => {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;\*\*/g, "")
    .replace(/\*\*/g, "")
    .replace(/&amp;/g, "&")
    .trim();
};

const getAreaBadge = (phrase) => {
  if (phrase.includes("Do not travel")) return "bg-red-100 text-red-700";
  if (phrase.includes("Reconsider")) return "bg-orange-100 text-orange-700";
  if (phrase.includes("high degree of caution"))
    return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
};

const parseAdviceLevels = (text) => {
  const results = [];

  levels.forEach(({ phrase, number }) => {
    const searchFor = `${phrase} ${phrase}`;

    if (text.includes(searchFor)) {
      const afterLevel = text.split(searchFor)[1];

      if (afterLevel) {
        const description = afterLevel
          .split(/(?=Do not travel|Reconsider|Exercise)/)[0]
          .replace(/^[,.\s]+/, "")
          .trim();

        if (description) {
          results.push({ phrase, number, description: cleanText(description) });
        }
      }
    }
  });

  return results;
};

const renderAdvisory = (data) => {
  const loadingEl = document.getElementById("loading");
  const contentEl = document.getElementById("advisory-content");
  const overallAdviceEl = document.getElementById("overall-advice");
  const riskBadgeEl = document.getElementById("risk-badge");
  const lastUpdateEl = document.getElementById("last-update");
  const lastChangedEl = document.getElementById("last-changed");
  const adviceLevelsEl = document.getElementById("advice-levels");
  const advisoryLinkEl = document.getElementById("advisory-link");

  loadingEl.classList.add("hidden");
  contentEl.classList.remove("hidden");

  // risk badge
  const riskLevel =
    data.field_overall_advice_level || "Exercise normal safety precautions";
  const risk =
    riskColors[riskLevel] || riskColors["Exercise normal safety precautions"];
  riskBadgeEl.textContent = risk.label;
  riskBadgeEl.className += ` ${risk.classes} px-5 py-2 rounded-full text-sm font-semibold`;

  // cverall advice
  overallAdviceEl.textContent = cleanText(
    data.field_overall_advice_level || "",
  );

  // latest update
  lastUpdateEl.textContent = cleanText(
    data.field_last_update || "No recent updates.",
  );

  // update date
  if (data.changed) {
    lastChangedEl.textContent = `Last updated: ${data.changed}`;
  }

  // Advice levels
  const adviceLevels = parseAdviceLevels(data.field_advice_levels || "");
  if (adviceLevels.length > 0) {
    adviceLevelsEl.innerHTML = adviceLevels
      .map(
        (item) => `
      <div class="border border-gray-100 rounded-xl p-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold ${getAreaBadge(item.phrase)}">
            ${item.number}
          </span>
          <span class="text-sm font-semibold text-gray-700">${item.phrase}</span>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
      </div>
    `,
      )
      .join("");
  } else {
    adviceLevelsEl.innerHTML =
      '<p class="text-gray-400">No specific area advisories available.</p>';
  }

  // Read more link
  if (data.field_url) {
    advisoryLinkEl.href = data.field_url;
  }
};

const showError = () => {
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error");
  loadingEl.classList.add("hidden");
  errorEl.classList.remove("hidden");
};

const fetchAdvisory = async () => {
  const proxies = [
    "https://api.allorigins.win/raw?url=",
    "https://corsproxy.io/?",
    "https://cors-anywhere.herokuapp.com/",
  ]
  const url = "https://www.smartraveller.gov.au/destinations-export"

  for (const proxy of proxies) {
    try {
      const res = await fetch(`${proxy}${url}`)
      if (!res.ok) continue
      const data = await res.json()
      const cambodia = data.find(c => c.title === "Cambodia")
      if (!cambodia) continue
      renderAdvisory(cambodia)
      return
    } catch (err) {
      console.log(`Proxy failed: ${proxy}`, err.message)
    }
  }
  showError()
}
window.onload = async () => {
  await fetchAdvisory();
};
