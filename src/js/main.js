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
 * Uses the same card structure as buildCard() in explore.js.
 * sightsData is provided by exploreData.js which is loaded before this script.
 */
function renderPopularDestinations() {
  const grid = document.getElementById("popular-destinations-grid");
  if (!grid || typeof sightsData === "undefined") return;

  const items = sightsData.slice(0, 4);

  grid.innerHTML = items
    .map((sight) => {
      // Stars — same logic as renderStars() in explore.js
      const fullStars = Math.floor(sight.rating);
      const hasHalf = sight.rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
      let starsHtml = "";
      for (let i = 0; i < fullStars; i++) starsHtml += `<i class="fas fa-star"></i>`;
      if (hasHalf) starsHtml += `<i class="fas fa-star-half-alt"></i>`;
      for (let i = 0; i < emptyStars; i++) starsHtml += `<i class="far fa-star"></i>`;

      const detailUrl = `/pages/explore/explore-detail.html?place=${encodeURIComponent(sight.name)}`;

      // Identical markup to buildCard() in explore.js
      return `
    <div class="relative flex flex-col overflow-hidden transition-shadow bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg">
      <div class="h-56 w-full overflow-hidden">
        <img
          src="${sight.image}"
          alt="${sight.alt}"
          class="w-full h-full object-cover"
          onerror="this.src='https://placehold.co/640x360/1c3f5e/ffffff?text=No+Image'"
        />
      </div>
      <div class="flex flex-col p-6">
        <div class="flex items-center mb-2 text-sm text-gray-800">
          <i class="fas fa-map-marker-alt mr-2 text-secondary shrink-0"></i>
          <span class="line-clamp-1">${sight.location}</span>
        </div>
        <h3 class="font-semibold text-xl text-primary mb-2 line-clamp-1">${sight.name}</h3>
        <p class="mb-4 text-sm text-gray-600 line-clamp-3 min-h-[3.75rem]">${sight.description}</p>
        <div class="flex items-center justify-between mb-3 text-sm">
          <span class="font-semibold text-secondary">${sight.price}</span>
          <span class="font-medium text-primary">${sight.hours}</span>
        </div>
        <div class="flex items-center mb-4">
          <div class="flex text-secondary">${starsHtml}</div>
          <span class="ml-2 text-sm text-gray-600">(${sight.rating})</span>
        </div>
        <div class="flex gap-2">
          <a href="${detailUrl}"
            class="block mt-auto border border-primary text-center py-2 rounded-lg hover:bg-background transition w-full">
            View Details
          </a>
          <a href="${sight.mapsUrl}" target="_blank"
            class="block mt-auto bg-primary text-white text-center py-2 rounded-lg hover:bg-[#162f45] transition w-full">
            Get Direction
          </a>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

// ─── Boot ───────────────────────────────────────────────────────────────────

// Run immediately on page load
initWeather();
renderPopularDestinations();

// Auto-refresh every 10 minutes
setInterval(initWeather, 10 * 60 * 1000);
