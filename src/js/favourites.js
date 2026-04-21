const FAV_KEY = "ppCompassFavourites";

function getFavourites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavourites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

function updateFavBadge() {
  const count = getFavourites().length;
  ["nav-fav-badge", "mobile-fav-badge"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (count > 0) {
      el.textContent = count > 9 ? "9+" : count;
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}

// Star renderer
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  let html = "";
  for (let i = 0; i < fullStars; i++) html += `<i class="fas fa-star"></i>`;
  if (hasHalf) html += `<i class="fas fa-star-half-alt"></i>`;
  for (let i = 0; i < emptyStars; i++) html += `<i class="far fa-star"></i>`;
  return html;
}

// Card render
function buildFavCard(item) {
  const encoded = encodeURIComponent(JSON.stringify(item));
  return `
    <div class="relative flex flex-col flex-none overflow-hidden transition-shadow bg-white border border-gray-100 shadow-md w-80 rounded-xl hover:shadow-lg" data-name="${item.name}">
      <button
        class="fav-remove-btn absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
        data-item="${encoded}"
        title="Remove from favourites"
        aria-label="Remove from favourites"
      >
        <i class="fa-solid fa-heart text-rose-500"></i>
      </button>
      <div class="h-56 w-full overflow-hidden">
        <img src="${item.image}" alt="${item.alt}" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col p-6">
        <div class="flex items-center mb-2 text-sm text-gray-800">
          <i class="fas fa-map-marker-alt mr-2 text-secondary shrink-0"></i>
          <span class="line-clamp-1">${item.location}</span>
        </div>
        <h3 class="font-semibold text-xl text-primary mb-2 line-clamp-1">${item.name}</h3>
        <p class="mb-4 text-sm text-gray-600 line-clamp-3 min-h-[3.75rem]">${item.description}</p>
        <div class="flex items-center justify-between mb-3 text-sm">
          <span class="font-semibold text-secondary">${item.price}</span>
          <span class="font-medium text-primary">${item.hours}</span>
        </div>
        <div class="flex items-center mb-4">
          <div class="flex text-secondary">${renderStars(item.rating)}</div>
          <span class="ml-2 text-sm text-gray-600">(${item.rating})</span>
        </div>
        <div class="flex gap-2">
          <a
            href="${item.pageUrl || "#"}"
            target="_blank"
            class="block mt-auto border border-primary text-center py-2 rounded-lg hover:bg-background transition w-full"
          >View Details</a>
          <a
            href="${item.mapsUrl}"
            target="_blank"
            class="block mt-auto bg-primary text-white text-center py-2 rounded-lg hover:bg-[#162f45] transition w-full"
          >Get Direction</a>
        </div>
      </div>
    </div>
  `;
}

// Empty state
function emptyStateHtml() {
  return `
    <div class="flex flex-col items-center justify-center py-24 text-center col-span-full">
      <div class="w-24 h-24 rounded-full bg-rose-50 flex items-center justify-center mb-6">
        <i class="fa-regular fa-heart text-5xl text-rose-300"></i>
      </div>
      <h2 class="text-2xl font-bold text-primary mb-2">No favourites yet</h2>
      <p class="text-gray-500 mb-6 max-w-sm">
        Browse the Explore page and tap the&nbsp;
        <i class="fa-regular fa-heart text-rose-400"></i>
        &nbsp;on any place to save it here.
      </p>
      <a
        href="/pages/explore.html"
        class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-[#162f45] transition font-semibold"
      >
        <i class="fas fa-compass"></i> Explore Places
      </a>
    </div>
  `;
}

// Main render
function renderFavourites() {
  const container = document.getElementById("favourites-grid");
  if (!container) return;

  const favs = getFavourites();

  // Update count label
  const countEl = document.getElementById("fav-count");
  if (countEl) {
    countEl.textContent =
      favs.length === 0
        ? "You haven't saved any places yet."
        : `${favs.length} saved place${favs.length !== 1 ? "s" : ""}`;
  }

  container.innerHTML =
    favs.length === 0 ? emptyStateHtml() : favs.map(buildFavCard).join("");

  updateFavBadge();
}

// Remove button functionality
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav-remove-btn");
  if (!btn) return;

  const item = JSON.parse(decodeURIComponent(btn.dataset.item));
  let favs = getFavourites();
  favs = favs.filter((f) => f.name !== item.name);
  saveFavourites(favs);

  // Animate card out, then remove and re-render count
  const card = btn.closest("[data-name]");
  if (card) {
    card.style.transition = "opacity 0.3s, transform 0.3s";
    card.style.opacity = "0";
    card.style.transform = "scale(0.95)";
    setTimeout(() => renderFavourites(), 300);
  }

  updateFavBadge();
});

// Init
renderFavourites();
document.addEventListener("navbarReady", updateFavBadge);
