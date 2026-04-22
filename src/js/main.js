/**
 * main.js — Home Page
 * Responsibilities: Weather Widget (real-time data via OpenWeatherMap)
 *
 * API key is read from CONFIG.OPENWEATHER_KEY (set in config.js)
 * If the key is empty, the widget shows realistic demo data automatically.
 */

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Map OWM weather condition code to an emoji icon */
function getWeatherIcon(code) {
  if (code >= 200 && code < 300) return "⛈️"; // Thunderstorm
  if (code >= 300 && code < 400) return "🌦️"; // Drizzle
  if (code >= 500 && code < 600) return "🌧️"; // Rain
  if (code >= 600 && code < 700) return "❄️"; // Snow
  if (code >= 700 && code < 800) return "🌫️"; // Fog / mist / haze
  if (code === 800) return "☀️"; // Clear sky
  if (code === 801) return "🌤️"; // Few clouds
  if (code === 802) return "⛅"; // Scattered clouds
  if (code >= 803) return "☁️"; // Broken / overcast
  return "🌡️";
}

function formatTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

// ─── Weather widget controller ───────────────────────────────────────────────

async function initWeather() {
  const elLoading = document.getElementById("w-loading");
  const elContent = document.getElementById("w-content");
  const elError = document.getElementById("w-error");

  // Reset to loading state on every call (including retries)
  elLoading.classList.remove("hidden");
  elContent.classList.add("hidden");
  elError.classList.add("hidden");

  // Read key from config.js (CONFIG is defined there)
  const apiKey =
    typeof CONFIG !== "undefined" && CONFIG.OPENWEATHER_KEY
      ? CONFIG.OPENWEATHER_KEY.trim()
      : "";

  // ── Demo mode: no API key configured yet ──────────────────────
  if (!apiKey) {
    setTimeout(() => {
      const now = new Date();
      document.getElementById("w-city").textContent = "Phnom Penh, KH";
      document.getElementById("w-time").textContent = formatTime(now);
      document.getElementById("w-date").textContent = formatDate(now);
      document.getElementById("w-icon").textContent = "⛅";
      document.getElementById("w-temp").textContent = "33°C";
      document.getElementById("w-desc").textContent = "Partly cloudy";
      document.getElementById("w-feels").textContent = "38°C";
      document.getElementById("w-humidity").textContent = "78%";
      document.getElementById("w-wind").textContent = "14 km/h";
      document.getElementById("w-vis").textContent = "10 km";
      elLoading.classList.add("hidden");
      elContent.classList.remove("hidden");
    }, 900);
    return;
  }

  // ── Live API call ──────────────────────────────────────────────
  try {
    const url = [
      "https://api.openweathermap.org/data/2.5/weather",
      "?q=Phnom%20Penh,KH",
      "&units=metric",
      `&appid=${apiKey}`,
    ].join("");

    const res = await fetch(url);
    if (!res.ok) throw new Error(`OWM API error — HTTP ${res.status}`);
    const data = await res.json();

    const now = new Date();
    const windKph = Math.round(data.wind.speed * 3.6); // m/s → km/h

    document.getElementById("w-city").textContent =
      `${data.name}, ${data.sys.country}`;
    document.getElementById("w-time").textContent = formatTime(now);
    document.getElementById("w-date").textContent = formatDate(now);
    document.getElementById("w-icon").textContent = getWeatherIcon(
      data.weather[0].id,
    );
    document.getElementById("w-temp").textContent =
      `${Math.round(data.main.temp)}°C`;
    document.getElementById("w-desc").textContent = data.weather[0].description;
    document.getElementById("w-feels").textContent =
      `${Math.round(data.main.feels_like)}°C`;
    document.getElementById("w-humidity").textContent =
      `${data.main.humidity}%`;
    document.getElementById("w-wind").textContent = `${windKph} km/h`;
    document.getElementById("w-vis").textContent =
      `${(data.visibility / 1000).toFixed(1)} km`;

    elLoading.classList.add("hidden");
    elContent.classList.remove("hidden");
  } catch (err) {
    console.error("[Weather] fetch failed:", err);
    elLoading.classList.add("hidden");
    elError.classList.remove("hidden");
  }
}

// ─── Popular Destinations ────────────────────────────────────────────────────

/**
 * Render the first 4 entries from sightsData into #popular-destinations-grid.
 * sightsData is provided by exploreData.js which is loaded before this script.
 */
function renderPopularDestinations() {
  const grid = document.getElementById("popular-destinations-grid");
  if (!grid || typeof sightsData === "undefined") return;

  const items = sightsData.slice(0, 4);

  grid.innerHTML = items
    .map((sight) => {
      // Build star display (filled / half / empty up to 5)
      const fullStars = Math.floor(sight.rating);
      const halfStar = sight.rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      const stars =
        '<i class="fa-solid fa-star text-yellow-400"></i>'.repeat(fullStars) +
        (halfStar
          ? '<i class="fa-solid fa-star-half-stroke text-yellow-400"></i>'
          : "") +
        '<i class="fa-regular fa-star text-yellow-300"></i>'.repeat(emptyStars);

      const detailUrl = `/pages/explore/explore-detail.html?place=${encodeURIComponent(sight.name)}`;

      return `
      <a href="${detailUrl}"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group flex flex-col">
        <div class="overflow-hidden">
          <img
            src="${sight.image}"
            alt="${sight.alt}"
            class="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            onerror="this.src='https://placehold.co/640x360/1c3f5e/ffffff?text=No+Image'"
          />
        </div>
        <div class="p-5 flex flex-col gap-1 flex-1">
          <h3 class="font-bold text-lg text-primary leading-snug">${sight.name}</h3>
          <p class="text-gray-400 text-xs flex items-center gap-1">
            <i class="fa-solid fa-location-dot"></i> ${sight.location}
          </p>
          <div class="flex items-center gap-1 text-sm mt-1">
            ${stars}
            <span class="text-gray-500 text-xs ml-1">${sight.rating.toFixed(1)}</span>
          </div>
          <p class="text-gray-500 text-xs mt-auto pt-2 border-t border-gray-100 flex items-center gap-1">
            <i class="fa-solid fa-ticket text-primary opacity-60"></i> ${sight.price}
            &nbsp;·&nbsp;
            <i class="fa-regular fa-clock text-primary opacity-60"></i> ${sight.hours}
          </p>
        </div>
      </a>`;
    })
    .join("");
}

// ─── Boot ───────────────────────────────────────────────────────────────────

// Run immediately on page load
initWeather();
renderPopularDestinations();

// Auto-refresh every 10 minutes
setInterval(initWeather, 10 * 60 * 1000);
