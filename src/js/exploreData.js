const cafesData = [
  {
    image: "../src/assets/explore/cafes/brown.jpeg",
    alt: "Brown Coffee & Bakery",
    location: "Street 51, Boeng Keng Kang 1",
    name: "Brown Coffee & Bakery (BKK1)",
    description:
      "Popular local coffee chain with stylish interiors, strong Wi-Fi, and a wide range of espresso drinks and pastries.",
    price: "$$ • Wi-Fi",
    hours: "7AM – 9PM",
    rating: 4.5,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Brown+Coffee+Boeng+Keng+Kang+Phnom+Penh",
  },
  {
    image: "../src/assets/explore/cafes/feel-good-coffee.jpg",
    alt: "Feel Good Cafe",
    location: "Street 136, Riverside (Daun Penh)",
    name: "Feel Good Cafe",
    description:
      "Fair-trade coffee roasted in-house, friendly staff, and a calm atmosphere just a short walk from the riverside.",
    price: "$ • Brunch",
    hours: "7AM – 5PM",
    rating: 4.6,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Feel+Good+Cafe+Phnom+Penh",
  },
  {
    image: "../src/assets/explore/cafes/java-creative-cafe.jpg",
    alt: "Java Creative Cafe",
    location: "Near Independence Monument, Norodom Blvd",
    name: "Java Creative Cafe",
    description:
      "Café and creative space with rotating art exhibitions, quiet corners, and a full food and drink menu.",
    price: "$$ • Art space",
    hours: "7AM – 9PM",
    rating: 4.5,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Java+Creative+Cafe+Phnom+Penh",
  },
  {
    image: "../src/assets/explore/cafes/farm-to-table.jpg",
    alt: "Farm to Table",
    location: "Street 360, Boeng Keng Kang 1",
    name: "Farm to Table",
    description:
      "Green garden setting with organic dishes, smoothies, and plenty of outdoor seating for a relaxed work session.",
    price: "$$ • Organic",
    hours: "7:30AM – 9PM",
    rating: 4.5,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Farm+to+Table+Phnom+Penh",
  },
];

const restaurantsData = [
  {
    image: "../src/assets/explore/restaurants/romdeng.avif",
    alt: "Romdeng Restaurant",
    location: "Street 174, Daun Penh",
    name: "Romdeng Restaurant",
    description:
      "Famous Cambodian restaurant offering traditional dishes in a heritage-style house.",
    price: "$$",
    hours: "11AM – 10PM",
    rating: 4.4,
    mapsUrl: "https://maps.app.goo.gl/XctG5ndeMLmWwoMGA",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/restaurants/phsar-chas.jpg",
    alt: "Phsar Chas Street Food",
    location: "Old Market, Daun Penh",
    name: "Phsar Chas Street Food",
    description:
      "Authentic street food stalls at the Old Market serving classic Khmer snacks and meals.",
    price: "$",
    hours: "6AM – 10PM",
    rating: 4.5,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Phsar+Chas+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/restaurants/malis.jpg",
    alt: "Malis Restaurant",
    location: "BKK1, Phnom Penh",
    name: "Malis Restaurant",
    description: "Fine-dining Khmer cuisine by Master Chef Luu Meng.",
    price: "$$$",
    hours: "11AM – 10PM",
    rating: 4.5,
    mapsUrl: "https://maps.app.goo.gl/LbLw3AUiMBvX9N7K6",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/restaurants/eleven-one-kitchen.webp",
    alt: "Eleven One Kitchen",
    location: "BKK1, Phnom Penh",
    name: "Eleven One Kitchen",
    description:
      "Healthy Khmer dishes served in a cozy garden-style restaurant.",
    price: "$$",
    hours: "10AM – 10PM",
    rating: 4.4,
    mapsUrl: "https://maps.app.goo.gl/Dbzs3dj2p8DKRYrw9",
    pageUrl: "",
  },
];

const museumsData = [
  {
    image: "../src/assets/explore/museums/national-museum.avif",
    alt: "National Museum of Cambodia",
    location: "Daun Penh",
    name: "National Museum of Cambodia",
    description:
      "Cambodia's largest museum of cultural history, featuring Khmer sculpture and ancient artifacts.",
    price: "$10",
    hours: "8AM – 5PM",
    rating: 4.7,
    mapsUrl: "https://www.google.com/maps?q=National+Museum+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/museums/toul-sleng.avif",
    alt: "Tuol Sleng Genocide Museum",
    location: "Tuol Sleng",
    name: "Tuol Sleng Genocide Museum",
    description:
      "Former high school turned Khmer Rouge prison. One of Cambodia's most important memorial sites.",
    price: "$5",
    hours: "8AM – 5PM",
    rating: 4.8,
    mapsUrl: "https://www.google.com/maps?q=Tuol+Sleng+Genocide+Museum",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/museums/living-art.jpg",
    alt: "Cambodia Living Arts",
    location: "Wat Phnom",
    name: "Cambodia Living Arts",
    description:
      "Center preserving Khmer performance arts through exhibitions and live cultural shows.",
    price: "$8",
    hours: "9AM – 6PM",
    rating: 4.6,
    mapsUrl: "https://www.google.com/maps?q=Cambodia+Living+Arts+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/museums/royal-palace.jpg",
    alt: "Royal Palace Museum",
    location: "Street 178",
    name: "Royal Palace Museum",
    description:
      "One of Phnom Penh's most iconic sites. Explore Khmer royal artifacts and the legendary Silver Pagoda.",
    price: "$10",
    hours: "8AM–11AM, 2PM–5PM",
    rating: 4.9,
    mapsUrl: "https://www.google.com/maps?q=Royal+Palace+Phnom+Penh",
    pageUrl: "",
  },
];

const sightsData = [
  {
    image: "../src/assets/explore/sights2see/royal-palace.jpg",
    alt: "Royal Palace Phnom Penh",
    location: "Khan Daun Penh",
    name: "Royal Palace",
    description:
      "Stunning Khmer architecture and official residence of the King of Cambodia.",
    price: "$10",
    hours: "8AM - 11AM, 2PM - 5PM",
    rating: 4.6,
    mapsUrl: "https://maps.google.com/?q=Royal+Palace+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/sights2see/wat-phnom.jpg",
    alt: "Wat Phnom",
    location: "Wat Phnom",
    name: "Wat Phnom Temple",
    description: "Sacred hilltop temple and historical landmark of Phnom Penh.",
    price: "$1",
    hours: "7AM - 6PM",
    rating: 4.6,
    mapsUrl: "https://maps.google.com/?q=Wat+Phnom+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/sights2see/central-market.jpg",
    alt: "Central Market Phnom Penh",
    location: "Central Market",
    name: "Central Market",
    description:
      "Iconic Art Deco market offering jewelry, souvenirs, and local goods.",
    price: "Free",
    hours: "7AM - 5PM",
    rating: 4.5,
    mapsUrl: "https://maps.google.com/?q=Central+Market+Phnom+Penh",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/sights2see/riverside.jpg",
    alt: "Riverside Promenade Phnom Penh",
    location: "Sisowath Quay",
    name: "Riverside Promenade",
    description:
      "Stunning riverfront walkway perfect for evening strolls and sunsets.",
    price: "Free",
    hours: "Open 24/7",
    rating: 4.8,
    mapsUrl: "https://maps.google.com/?q=Sisowath+Quay",
    pageUrl: "",
  },
  {
    image: "../src/assets/explore/sights2see/russian-market.jpg",
    alt: "Russian Market Phnom Penh",
    location: "Toul Tom Poung",
    name: "Russian Market",
    description:
      "Famous market for bargains, clothing, souvenirs, and street food.",
    price: "Free",
    hours: "7AM - 5PM",
    rating: 4.4,
    mapsUrl: "https://maps.google.com/?q=Russian+Market+Phnom+Penh",
    pageUrl: "",
  },
];
