// ==========================================
// PAGINATION STATE
// ==========================================
let currentPage = 1
const itemsPerPage = 18

window.goToPage = function (pageNumber) {
  currentPage = pageNumber
  renderCards()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// ==========================================
// FILTER STATE & CUSTOM DROPDOWN LOGIC
// ==========================================
let currentFilter = "All"

// Opens and closes the menu
window.toggleFilterDropdown = function (event) {
  event.stopPropagation()
  const menu = document.getElementById("customDropdownMenu")
  const icon = document.getElementById("filterDropdownIcon")

  if (menu.classList.contains("opacity-0")) {
    menu.classList.remove("opacity-0", "pointer-events-none", "-translate-y-2")
    icon.classList.add("rotate-180")
  } else {
    closeFilterDropdown()
  }
}

// Closes the menu
window.closeFilterDropdown = function () {
  const menu = document.getElementById("customDropdownMenu")
  const icon = document.getElementById("filterDropdownIcon")
  if (menu && !menu.classList.contains("opacity-0")) {
    menu.classList.add("opacity-0", "pointer-events-none", "-translate-y-2")
    icon.classList.remove("rotate-180")
  }
}

document.addEventListener("click", function (event) {
  const container = document.getElementById("customDropdownContainer")
  if (container && !container.contains(event.target)) {
    closeFilterDropdown()
  }
})

// Handles selecting an item from the menu
window.selectCustomFilter = function (value, label) {
  currentFilter = value
  currentPage = 1
  document.getElementById("selectedFilterText").textContent = label
  closeFilterDropdown() // Hide the menu
  renderCards() // Refresh the page
}

// 2. Global Handlers (Flip & Accordion)
window.handleCardFlip = function (clickedIndex, event) {
  if (event && event.target.closest("a")) return

  const allCards = document.querySelectorAll(".flip-inner")
  allCards.forEach((card, index) => {
    if (index === clickedIndex) {
      card.classList.toggle("is-flipped")
    } else {
      card.classList.remove("is-flipped")
    }
  })
}

// Accordion toggle
window.toggleAppCard = function (clickedIndex, event) {
  if (event && event.target.closest("a")) return

  const targetDetails = document.getElementById(`app-details-${clickedIndex}`)
  const targetChevron = document.getElementById(`chevron-${clickedIndex}`)

  if (
    targetDetails.style.maxHeight &&
    targetDetails.style.maxHeight !== "0px"
  ) {
    targetDetails.style.maxHeight = "0px"
    targetChevron.style.transform = "rotate(0deg)"
  } else {
    const allDetails = document.querySelectorAll(".app-details-content")
    const allChevrons = document.querySelectorAll(".app-chevron")

    allDetails.forEach((div) => (div.style.maxHeight = "0px"))
    allChevrons.forEach((icon) => (icon.style.transform = "rotate(0deg)"))

    targetDetails.style.maxHeight = "1200px"
    targetChevron.style.transform = "rotate(180deg)"
  }
}

// ==========================================
// SCROLL LISTENER FOR APP SCREENSHOTS
// ==========================================
window.handleScreenshotScroll = function (container) {
  if (!container) return
  const arrow = container.parentElement.querySelector(".swipe-arrow")
  if (!arrow) return

  const isScrollable = container.scrollWidth > container.clientWidth + 5
  const isAtEnd =
    container.scrollLeft + container.clientWidth >= container.scrollWidth - 5

  if (!isScrollable || isAtEnd) {
    arrow.classList.add("!opacity-0")
  } else {
    arrow.classList.remove("!opacity-0")
  }
}

// ==========================================
// 3. The Rendering Function
// ==========================================
function renderCards() {
  const pathname = window.location.pathname

  if (pathname.includes("emergency")) {
    renderEmergencyTable()
    return
  }

  const container = document.getElementById("services-container")
  if (!container) return

  let currentCategory = ""
  if (pathname.includes("hospitals")) currentCategory = "hospitals"
  else if (pathname.includes("embassies")) currentCategory = "embassies"
  else if (pathname.includes("useful-app")) currentCategory = "apps"

  // --- HELPER: Extracts individual tags for Apps ---
  const getAppTags = (badge) => {
    if (!badge) return ["App"]
    if (Array.isArray(badge)) return badge.map((t) => t.trim())
    return badge.split("/").map((t) => t.trim())
  }

  // --- UPGRADED UNIVERSAL SMART MAPPER ---
  const getMasterGroup = (item, category) => {
    let tag = Array.isArray(item.badge) ? item.badge[0] : item.badge || "Other"
    const t = tag.toLowerCase()

    if (category === "embassies") {
      if (t.includes("asia") || t.includes("middle east")) return "Asia"
      if (
        t.includes("europe") ||
        t.includes("russia") ||
        t.includes("uk") ||
        t.includes("kingdom")
      )
        return "Europe"
      if (
        t.includes("america") ||
        t.includes("usa") ||
        t.includes("canada") ||
        t.includes("latin") ||
        t.includes("mexico") ||
        t.includes("brazil")
      )
        return "The Americas"
      if (t.includes("africa")) return "Africa"
      if (
        t.includes("oceania") ||
        t.includes("australia") ||
        t.includes("pacific") ||
        t.includes("zealand")
      )
        return "Oceania"
      return tag
    }

    if (category === "hospitals") {
      if (item.category === "clinics" || t.includes("clinic")) return "Clinics"
      return "Hospitals"
    }

    return tag
  }

  // ==========================================
  // CUSTOM UI DROPDOWN POPULATOR
  // ==========================================
  const dropdownOptionsContainer = document.getElementById(
    "customDropdownOptions",
  )
  if (dropdownOptionsContainer) {
    const pageData = servicesData.filter((item) => {
      if (currentCategory === "hospitals" && item.category === "clinics")
        return true
      return item.category === currentCategory
    })

    const uniqueGroups = new Set()

    pageData.forEach((item) => {
      if (currentCategory === "apps") {
        const tags = getAppTags(item.badge)
        tags.forEach((tag) => uniqueGroups.add(tag))
      } else {
        uniqueGroups.add(getMasterGroup(item, currentCategory))
      }
    })

    const sortedGroups = ["All", ...Array.from(uniqueGroups).sort()]

    const optionsHTML = sortedGroups
      .map((group) => {
        const isSelected = currentFilter === group
        const label = group === "All" ? "All Categories" : group

        const activeClasses = isSelected
          ? "bg-[#DFB777]/10 text-[#be924b] font-bold"
          : "text-[#202D45] hover:bg-gray-50"
        const checkmark = isSelected
          ? `<i class="fa-solid fa-check text-[#be924b] text-sm shrink-0"></i>`
          : `<span class="w-3.5 shrink-0"></span>`

        return `
        <button onclick="selectCustomFilter('${group}', '${label}')" class="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors text-sm sm:text-base ${activeClasses}">
          ${checkmark}
          <span class="truncate">${label}</span>
        </button>
      `
      })
      .join("")

    if (dropdownOptionsContainer.innerHTML !== optionsHTML) {
      dropdownOptionsContainer.innerHTML = optionsHTML
    }
  }

  // ==========================================
  // FILTERING LOGIC
  // ==========================================
  const searchInput = document.getElementById("searchInput")
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""

  const filteredData = servicesData.filter((item) => {
    let matchesCategory = item.category === currentCategory
    if (currentCategory === "hospitals" && item.category === "clinics") {
      matchesCategory = true
    }

    const badgeText = Array.isArray(item.badge)
      ? item.badge.join(" ")
      : item.badge || ""
    const matchesSearch =
      (item.name || "").toLowerCase().includes(searchTerm) ||
      (item.description || "").toLowerCase().includes(searchTerm) ||
      badgeText.toLowerCase().includes(searchTerm)

    // SMARTER DROPDOWN MATCHING
    let matchesDropdown = true
    if (currentFilter !== "All") {
      if (currentCategory === "apps") {
        // If it's an app, check if the specific filter exists inside its array of tags
        const tags = getAppTags(item.badge)
        matchesDropdown = tags.includes(currentFilter)
      } else {
        const itemGroup = getMasterGroup(item, currentCategory)
        matchesDropdown = itemGroup === currentFilter
      }
    }

    return matchesCategory && matchesSearch && matchesDropdown
  })

  // ==========================================
  // SMART-SORT THE DATA
  // ==========================================
  if (currentCategory !== "apps") {
    filteredData.sort((a, b) => {
      let groupA = getMasterGroup(a, currentCategory)
      let groupB = getMasterGroup(b, currentCategory)

      if (groupA === groupB) {
        return (a.name || "").localeCompare(b.name || "")
      }

      if (currentCategory === "hospitals") {
        if (groupA === "Hospitals") return -1
        if (groupB === "Hospitals") return 1
      }

      return groupA.localeCompare(groupB)
    })
  }

  if (currentCategory === "apps") {
    container.className = "flex flex-col gap-5 max-w-4xl mx-auto w-full"
  } else {
    container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }

  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 w-full">
        <i class="fa-solid fa-magnifying-glass text-4xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-bold text-[#202D45]">No results found</h3>
        <p class="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
      </div>
    `
    return
  }

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  if (currentPage > totalPages) currentPage = 1

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = filteredData.slice(startIndex, endIndex)

  let cardsHTML = ""
  let currentBadgeTracker = ""

  // ==========================================
  // RENDER LOGIC FOR APPS
  // ==========================================
  if (currentCategory === "apps") {
    cardsHTML =
      `
      <style>
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      </style>
    ` +
      paginatedData
        .map((item, index) => {
          const tags = getAppTags(item.badge)

          return `
      <div class="bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300">

          <div class="p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 cursor-pointer group relative" onclick="toggleAppCard(${index}, event)">
              <div class="flex items-center gap-4 sm:gap-6 w-full sm:w-auto flex-grow">
                  <img src="${item.image}" alt="${item.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-sm flex-shrink-0 border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <div class="flex-grow pr-10 sm:pr-0">
                      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <h2 class="text-xl sm:text-2xl font-bold text-[#202D45] leading-tight">${item.name}</h2>
                          <div class="flex flex-wrap items-center gap-1.5">
                              ${tags
                                .map(
                                  (tag) => `
                                  <span class="inline-block px-3 py-1 bg-[#DFB777]/20 text-[#be924b] text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">${tag}</span>
                              `,
                                )
                                .join("")}
                          </div>
                      </div>
                  </div>
              </div>
              <div class="absolute right-5 top-8 sm:static sm:right-auto sm:top-auto">
                  <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-gray-100 transition-colors shadow-sm">
                      <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 app-chevron" id="chevron-${index}"></i>
                  </div>
              </div>
          </div>

          <div id="app-details-${index}" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out bg-[#F8F9FA] app-details-content">
              <div class="px-5 pt-5 pb-6 md:px-8 md:pt-6 md:pb-8 border-t border-gray-100">

                  <p class="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">${item.description}</p>

                  ${
                    item.screenshots && item.screenshots.length > 0
                      ? `
                  <div class="mb-6 md:mb-8">
                      <div class="mb-3 px-1">
                          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Screenshots</span>
                      </div>
                      
                      <div class="relative w-full group/slider" onmouseenter="handleScreenshotScroll(this.querySelector('.hide-scrollbar'))">
                          <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar" onscroll="handleScreenshotScroll(this)">
                              ${item.screenshots.map((src) => `<img src="${src}" alt="${item.name} screenshot" onclick="openLightbox('${src}')" class="h-48 sm:h-56 md:h-72 w-auto rounded-xl object-cover shadow-sm snap-center border border-gray-200 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200">`).join("")}
                          </div>
                          
                          <div class="swipe-arrow hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-10">
                              <div class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200 text-[#202D45]">
                                  <i class="fa-solid fa-chevron-right text-lg ml-0.5"></i>
                              </div>
                          </div>
                      </div>
                  </div>
                  `
                      : ""
                  }

                  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-2">
                      <div class="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold w-full lg:w-auto">
                          ${
                            item.link && item.link !== "N/A"
                              ? `
                          <a href="${item.link}" target="_blank" class="flex items-center gap-2.5 text-[#202D45] hover:text-[#DFB777] transition-colors h-auto sm:h-11">
                              <div class="w-6 flex justify-center -mt-0.5"><i class="fa-solid fa-compass text-[#DFB777] text-[22px]"></i></div> Visit Website
                          </a>`
                              : ""
                          }

                          ${
                            item.email && item.email !== "N/A"
                              ? `
                          <a href="mailto:${item.email}" class="flex items-center gap-2.5 text-[#202D45] hover:text-[#DFB777] transition-colors h-auto sm:h-11">
                              <div class="w-6 flex justify-center -mt-0.5"><i class="fa-solid fa-envelope text-[#DFB777] text-[22px]"></i></div> Support Email
                          </a>`
                              : ""
                          }

                          ${
                            item.phone && item.phone !== "N/A"
                              ? `
                          <a href="tel:${item.phone.split("/")[0].replace(/\s+/g, "")}" class="flex items-center gap-2.5 text-[#202D45] hover:text-[#DFB777] transition-colors h-auto sm:h-11">
                              <div class="w-6 flex justify-center -mt-0.5"><i class="fa-solid fa-phone text-[#DFB777] text-[22px]"></i></div> Telephone
                          </a>`
                              : ""
                          }
                      </div>

                      <div class="grid grid-cols-1 min-[400px]:grid-cols-2 lg:flex items-stretch gap-3 w-full lg:w-auto">
                          ${
                            item.appStoreLink
                              ? `
                          <a href="${item.appStoreLink}" target="_blank" class="flex items-center justify-center gap-2.5 bg-black text-white h-12 px-4 rounded-xl hover:bg-gray-800 transition-all shadow-sm w-full lg:w-auto">
                              <i class="fa-brands fa-apple text-[28px] mt-[-2px]"></i>
                              <div class="flex flex-col items-start justify-center">
                                  <span class="block text-[8px] sm:text-[9px] text-gray-300 tracking-wider uppercase leading-none mb-1">Download on the</span>
                                  <span class="block font-semibold text-[14px] sm:text-[15px] leading-none">App Store</span>
                              </div>
                          </a>`
                              : ""
                          }

                          ${
                            item.playStoreLink
                              ? `
                          <a href="${item.playStoreLink}" target="_blank" class="flex items-center justify-center gap-2.5 bg-black text-white h-12 px-4 rounded-xl hover:bg-gray-800 transition-all shadow-sm w-full lg:w-auto">
                              <svg class="w-[24px] h-[24px]" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                  <path fill="#2196F3" d="M129.5 900.5c-4 4-6.4 9.6-6.4 16v-809c0-6.4 2.4-12 6.4-16l452.3 452.3-452.3 456.7z"/>
                                  <path fill="#4CAF50" d="M685.2 607.3l-103.4-103.4-452.3 456.7c11.6 11.6 31 12.3 43.6 5.1l512.1-294.6-54.2-63.8z"/>
                                  <path fill="#F44336" d="M685.2 416.7l54.2-63.8L227.3 58.3c-12.6-7.2-32-6.5-43.6 5.1l452.3 456.7 49.2-103.4z"/>
                                  <path fill="#FFEB3B" d="M962.8 543.8L739.4 671.1 636 567.7l103.4-103.4 223.4 127.3c21.8 12.5 21.8 39.7 0 52.2z"/>
                              </svg>
                              <div class="flex flex-col items-start justify-center">
                                  <span class="block text-[8px] sm:text-[9px] text-gray-300 tracking-wider uppercase leading-none mb-1">GET IT ON</span>
                                  <span class="block font-semibold text-[14px] sm:text-[15px] leading-none">Google Play</span>
                              </div>
                          </a>`
                              : ""
                          }
                      </div>
                  </div>
              </div>
          </div>
      `
        })
        .join("")
  } else {
    // ==========================================
    // RENDER LOGIC FOR FLIP CARDS
    // ==========================================
    cardsHTML =
      `
      <style>
        /* Base 3D Space */
        .flip-container { 
          perspective: 1000px; 
          -webkit-perspective: 1000px; 
        }
        
        /* The Rotating Wrapper */
        .flip-inner { 
          transform-style: preserve-3d; 
          -webkit-transform-style: preserve-3d; 
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        
        /* Both Faces: Apple specific hardware acceleration fixes */
        .flip-front, .flip-back { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden; 
          /* Forces iOS to render this on the GPU, fixing the bleed-through */
          transform: translate3d(0,0,0);
          -webkit-transform: translate3d(0,0,0);
        }
        
        /* Front Face specific */
        .flip-front {
          z-index: 2;
          transform: rotateY(0deg);
          -webkit-transform: rotateY(0deg);
        }

        /* Back Face specific */
        .flip-back { 
          z-index: 1;
          transform: rotateY(180deg); 
          -webkit-transform: rotateY(180deg);
        }
        
        /* The active flipped state */
        .is-flipped { 
          transform: rotateY(180deg); 
          -webkit-transform: rotateY(180deg);
        }
        
        /* Disables clicking the front when looking at the back */
        .is-flipped .flip-front { 
          pointer-events: none; 
          z-index: 0;
        }
        
        .flip-back a { position: relative; z-index: 50; }
      </style>
    ` +
      paginatedData
        .map((item, index) => {
          const tags = Array.isArray(item.badge)
            ? item.badge
            : item.badge
              ? item.badge.split("/")
              : ["General"]

          let headerGroup = getMasterGroup(item, currentCategory)

          let headerHTML = ""
          if (headerGroup !== currentBadgeTracker) {
            headerHTML = `
          <div class="col-span-full w-full flex items-center gap-4 ${index === 0 ? "mt-0" : "mt-6"} mb-2">
            <h3 class="text-sm sm:text-base font-black text-[#202D45] uppercase tracking-widest">${headerGroup}</h3>
            <div class="h-px bg-gray-200 flex-grow"></div>
          </div>
        `
            currentBadgeTracker = headerGroup
          }

          return (
            headerHTML +
            `
      <div class="flip-container h-[480px] w-full cursor-pointer group js-card" onclick="handleCardFlip(${index}, event)">
        <div class="flip-inner relative w-full h-full rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300">

          <div class="flip-front absolute inset-0 rounded-2xl overflow-hidden bg-[#202D45]">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover">` : ""}
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent opacity-95"></div>
            <div class="relative z-10 p-5 sm:p-6 flex flex-col h-full justify-end text-left">
              <div class="mb-3 transition-all duration-300">
                <div class="flex flex-wrap gap-2 mb-3">
                    ${tags
                      .map(
                        (tag) => `
                        <span class="inline-block px-3 py-1 bg-[#DFB777] text-[#202D45] text-xs font-bold rounded-full shadow-sm whitespace-nowrap">${tag.trim()}</span>
                    `,
                      )
                      .join("")}
                </div>
                <h2 class="text-xl sm:text-2xl font-bold text-white leading-tight line-clamp-2" title="${item.name}">${item.name}</h2>
              </div>
              <p class="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">${item.description}</p>
              <div class="mt-4 border-t border-gray-600/50 pt-4 text-[#DFB777] text-sm font-semibold flex items-center justify-center shrink-0">
                <i class="fa-solid fa-arrow-right-arrow-left mr-2"></i> Tap to view details
              </div>
            </div>
          </div>

          <div class="flip-back absolute inset-0 bg-[#202D45] rounded-2xl border border-gray-700 p-5 sm:p-6 flex flex-col">
            <h2 class="text-lg sm:text-xl font-bold text-white mb-5 border-b border-gray-600 pb-4">${item.name}</h2>
            <div class="space-y-4 text-sm text-gray-200 flex-grow mt-2">

              ${
                item.facebook && item.facebook !== "N/A"
                  ? `
              <div class="grid grid-cols-[24px_1fr] gap-3 items-start">
                <div class="flex justify-center items-center h-5">
                  <i class="fa-brands fa-facebook text-[#DFB777] text-base"></i>
                </div>
                <a href="${item.facebook}" target="_blank" rel="noopener noreferrer" class="hover:text-[#DFB777] transition-colors line-clamp-2 break-words">
                  ${item.facebookName || "Facebook Page"}
                </a>
              </div>`
                  : ""
              }

              ${
                item.phone && item.phone !== "N/A"
                  ? `
              <div class="grid grid-cols-[24px_1fr] gap-3 items-start">
                <div class="flex justify-center items-center h-5">
                  <i class="fa-solid fa-phone text-[#DFB777] text-base"></i>
                </div>
                <div>
                  ${item.phone
                    .split("/")
                    .map((p) => {
                      const cleanPhone = p.trim()
                      return `<a href="tel:${cleanPhone.replace(/\s+/g, "")}" class="hover:text-[#DFB777] transition-colors break-words inline-block">${cleanPhone}</a>`
                    })
                    .join(' <span class="text-gray-500 mx-1">/</span> ')}
                </div>
              </div>`
                  : ""
              }

              ${
                item.email && item.email !== "N/A"
                  ? `
              <div class="grid grid-cols-[24px_1fr] gap-3 items-start">
                <div class="flex justify-center items-center h-5">
                  <i class="fa-solid fa-envelope text-[#DFB777] text-base"></i>
                </div>
                <a href="mailto:${item.email}" class="hover:text-[#DFB777] transition-colors break-all">${item.email}</a>
              </div>`
                  : ""
              }

              <div class="grid grid-cols-[24px_1fr] gap-3 items-start">
                <div class="flex justify-center items-center h-5">
                  <i class="fa-solid fa-location-dot text-[#DFB777] text-base"></i>
                </div>
                ${
                  item.mapLink && item.mapLink !== "N/A"
                    ? `
                <a href="${item.mapLink}" target="_blank" rel="noopener noreferrer" class="hover:text-[#DFB777] hover:underline transition-all block" title="Open in Google Maps">
                  ${item.address}
                </a>`
                    : `<span class="block">${item.address}</span>`
                }
              </div>
            </div>
            <div class="mt-auto space-y-4 pt-4">
              <a href="${item.link}" target="_blank" class="block w-full text-center bg-[#DFB777] text-[#202D45] font-bold py-3 sm:py-2.5 px-4 rounded-xl hover:bg-white transition-colors text-sm shadow-lg">
                <i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Visit Website
              </a>
              <div class="text-center text-gray-400 text-xs flex items-center justify-center">
                 <i class="fa-solid fa-rotate-left mr-1"></i> Tap anywhere to close
              </div>
            </div>
          </div>
        </div>
      </div>
      `
          )
        })
        .join("")
  }

  // ==========================================
  // RENDER PAGINATION BUTTONS
  // ==========================================
  let paginationHTML = ""
  if (totalPages > 1) {
    let pageButtons = ""
    for (let i = 1; i <= totalPages; i++) {
      pageButtons += `
        <button onclick="goToPage(${i})" class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${currentPage === i ? "bg-[#202D45] text-white shadow-md" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}">
          ${i}
        </button>
      `
    }

    paginationHTML = `
      <div class="col-span-full flex justify-center items-center gap-2 mt-8 mb-4 w-full">
        <button onclick="goToPage(${currentPage - 1})" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" ${currentPage === 1 ? "disabled" : ""}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        ${pageButtons}
        <button onclick="goToPage(${currentPage + 1})" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" ${currentPage === totalPages ? "disabled" : ""}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    `
  }

  container.innerHTML = cardsHTML + paginationHTML
}

// 4. Initialize and add Search Bar Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderCards()

  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentPage = 1
      renderCards()
    })
  }
})

// ==========================================
// 4. Dedicated Emergency Table Renderer
// ==========================================
function renderEmergencyTable() {
  const container = document.getElementById("services-container")
  if (!container) return

  const searchInput = document.getElementById("searchInput")
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""

  const filteredTable = emergencyTableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.phone.includes(searchTerm),
  )

  container.className = "w-full max-w-4xl mx-auto px-4 sm:px-0"

  if (filteredTable.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 w-full">
        <i class="fa-solid fa-magnifying-glass text-4xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-bold text-[#202D45]">No results found</h3>
        <p class="text-gray-500 mt-2">Try adjusting your search terms.</p>
      </div>`
    return
  }

  // --- HTML Generation with Smart Grouping ---
  let tableRowsHTML = ""
  let currentCategoryTracker = ""
  let globalRowNumber = 1

  filteredTable.forEach((item) => {
    // 1. If the category changes, insert a full-width header row
    if (item.category !== currentCategoryTracker) {
      tableRowsHTML += `
        <tr class="bg-gray-100 border-b border-gray-200">
          <td colspan="3" class="py-3 px-6 font-bold text-[#202D45] uppercase tracking-widest text-xs border-none">
            ${item.category}
          </td>
        </tr>
      `
      currentCategoryTracker = item.category
    }

    // 2. Insert the actual service row
    tableRowsHTML += `
      <tr class="hover:bg-[#DFB777]/15 transition-colors bg-white border-b border-gray-100 last:border-0">
        <td class="py-4 px-6 text-center font-semibold text-gray-500">${globalRowNumber++}</td>
        <td class="py-4 px-6 font-medium border-l border-gray-100 text-[#202D45]">${item.name}</td>
        <td class="py-4 px-6 font-bold text-[#202D45] border-l border-gray-100 whitespace-nowrap">
          ${item.phone
            .split("/")
            .map((p) => {
              const cleanPhone = p.trim()
              return `<a href="tel:${cleanPhone.replace(/\s+/g, "")}" class="hover:text-[#DFB777] transition-colors inline-block">${cleanPhone}</a>`
            })
            .join(' <span class="text-gray-300 font-normal mx-1">/</span> ')}
        </td>
      </tr>
    `
  })

  // Render the final table to the screen
  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8 w-full mt-4">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr class="bg-[#DFB777] text-[#202D45]">
              <th class="py-4 px-6 font-bold text-sm w-16 text-center border-b border-[#cca76a]">No.</th>
              <th class="py-4 px-6 font-bold text-sm border-b border-[#cca76a] border-l border-[#cca76a]">Institution / Service</th>
              <th class="py-4 px-6 font-bold text-sm w-1/3 border-b border-[#cca76a] border-l border-[#cca76a]">Phone Number</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            ${tableRowsHTML}
          </tbody>
        </table>
      </div>
    </div>
  `
}

// ==========================================
// 5. Fullscreen Image Lightbox
// ==========================================
window.openLightbox = function (src) {
  // Create the dark overlay container
  const lightbox = document.createElement("div")
  lightbox.className =
    "fixed inset-0 z-[100] bg-[#0f172a]/95 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300 cursor-pointer"

  // Add the close button and the image
  lightbox.innerHTML = `
    <button class="absolute top-6 right-6 text-white hover:text-[#DFB777] transition-colors z-[101]">
      <i class="fa-solid fa-xmark text-4xl"></i>
    </button>
    <img src="${src}" class="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl scale-95 transition-transform duration-300" alt="Fullscreen View">
  `

  // Close the lightbox when clicking anywhere
  lightbox.onclick = function () {
    lightbox.classList.remove("opacity-100")
    lightbox.querySelector("img").classList.remove("scale-100")
    setTimeout(() => lightbox.remove(), 300) // Wait for fade-out animation to finish
  }

  // Add it to the page and trigger the smooth fade-in animation
  document.body.appendChild(lightbox)
  requestAnimationFrame(() => {
    lightbox.classList.add("opacity-100")
    lightbox.querySelector("img").classList.add("scale-100")
    lightbox.querySelector("img").classList.remove("scale-95")
  })
}
