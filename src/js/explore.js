const FAV_KEY = "ppCompassFavourites";

// Returns the saved favourites array from localStorage.
function getFavourites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

// Saves the full favourites array back to localStorage.
function saveFavourites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

// Checks whether a place (by name) is already favourited.
function isFavourited(name) {
  return getFavourites().some((f) => f.name === name);
}

// Adds or removes a place object from favourites, then updates the badge.
function toggleFavourite(item) {
  let favs = getFavourites();
  const idx = favs.findIndex((f) => f.name === item.name);
  if (idx === -1) {
    favs.push(item);
  } else {
    favs.splice(idx, 1);
  }
  saveFavourites(favs);
  updateFavBadge();
}

// Refreshes the heart-icon badge in the navbar.
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

// Generate star icon
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  let starsHtml = "";
  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<i class="fas fa-star"></i>`;
  }
  if (hasHalf) {
    starsHtml += `<i class="fas fa-star-half-alt"></i>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += `<i class="far fa-star"></i>`;
  }
  return starsHtml;
}

// build card places as card component
function buildCard(item) {
  const loved = isFavourited(item.name);
  const heartClass = loved
    ? "fa-solid fa-heart text-rose-500"
    : "fa-regular fa-heart text-secondary";

  // Encode item data into a data attribute so the button can reference it
  const encoded = encodeURIComponent(JSON.stringify(item));

  return `
    <div class="relative flex flex-col flex-none overflow-hidden transition-shadow bg-white border border-gray-100 shadow-md w-80 rounded-xl hover:shadow-lg">
      <button
        class="fav-btn absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
        data-item="${encoded}"
        title="${loved ? "Remove from favourites" : "Save to favourites"}"
        aria-label="${loved ? "Remove from favourites" : "Save to favourites"}"
      >
        <i class="${heartClass}"></i>
      </button>
      <div class="h-56 w-full overflow-hidden">
        <img
          src="${item.image}"
          alt="${item.alt}"
          class="w-full h-full object-cover"
        />
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
          <div class="flex text-secondary">
            ${renderStars(item.rating)}
          </div>
          <span class="ml-2 text-sm text-gray-600">(${item.rating})</span>
        </div>
        <div class="flex gap-2">
          <a
            href="${item.pageUrl || "#"}"
            target="_blank"
            class="block mt-auto border border-primary text-center py-2 rounded-lg hover:bg-background transition w-full"
          >
            View Details
          </a>
          <a
            href="${item.mapsUrl}"
            target="_blank"
            class="block mt-auto bg-primary text-white text-center py-2 rounded-lg hover:bg-[#162f45] transition w-full"
          >
            Get Direction
          </a>
        </div>
      </div>
    </div>
  `;
}

// Render card
function renderCards(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data.map(buildCard).join("");
}

// Heart icon functionality
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav-btn");
  if (!btn) return;

  const item = JSON.parse(decodeURIComponent(btn.dataset.item));
  toggleFavourite(item);

  const alreadyLoved = isFavourited(item.name);
  const icon = btn.querySelector("i");

  // Swap icon style
  icon.className = alreadyLoved
    ? "fa-solid fa-heart text-rose-500"
    : "fa-regular fa-heart text-secondary";

  // Bump animation
  btn.classList.add("scale-125");
  setTimeout(() => btn.classList.remove("scale-125"), 200);

  btn.title = alreadyLoved ? "Remove from favourites" : "Save to favourites";
});

// Render all four sections
renderCards("cafes-list", cafesData);
renderCards("restaurants-list", restaurantsData);
renderCards("museums-list", museumsData);
renderCards("sights-list", sightsData);

// Update badge once navbar is ready (navbar loads asynchronously)
// components.js calls updateFavBadge() after inject — this handles the page-load case
document.addEventListener("navbarReady", updateFavBadge);
