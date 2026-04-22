// 1. The Data Array
const servicesData = [
  // ==========================================
  // HOSPITALS
  // ==========================================
  {
    category: "hospitals",
    name: "Calmette Hospital",
    badge: "Public",
    image: "../../src/assets/services/calmette.jpg",
    email: "info@calmette.gov.kh",
    mapLink: "https://maps.app.goo.gl/ZLxRQ427aW8z474i6",
    description:
      "Cambodia's premier public hospital founded in 1950, managed by the Ministry of Health with French government support. Offers the most comprehensive clinical services and advanced ICU in the country.",
    phone: "+855 23 426 948",
    address:
      "No. 3, Monivong Blvd (93), Sangkat Sras Chok, Daun Penh, Phnom Penh",
    link: "https://calmette.gov.kh/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Royal Phnom Penh Hospital",
    badge: "International",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Royal_Phnom_Penh_Hospital.jpg/3840px-Royal_Phnom_Penh_Hospital.jpg",
    email: "info@royalphnompenhhospital.com",
    mapLink: "https://maps.app.goo.gl/DnbmBqjvJwFaswCe9",
    description:
      "The first JCI-accredited hospital in Cambodia. Features international doctors, advanced imaging, ICU, and 24/7 emergency services.",
    phone: "+855 23 991 000",
    address:
      "No. 888, Russian Confederation Blvd (110), Sangkat Toeuk Thla, Sen Sok, Phnom Penh",
    link: "https://royalphnompenhhospital.com/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Intercare Hospital",
    badge: "International",
    image:
      "https://intercarehospital.com/wp-content/uploads/2024/05/IMG_8272-1024x683-1.jpg",
    email: "info@intercarehospital.com",
    mapLink: "https://maps.app.goo.gl/jBTNy52qMmWSSG9o8",
    description:
      "Singapore-standard hospital at Olympia Medical Hub offering emergency care, specialist consultations, advanced imaging, laboratory, vaccinations, and visa health checks.",
    phone: "+855 23 996 900",
    address:
      "Olympia Medical Hub, Building C5 Tower, Street 161, Veal Vong, 7 Makara, Phnom Penh",
    link: "https://intercarehospital.com/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Khema International Hospital",
    badge: "International",
    image: "../../src/assets/services/khema.jpg",
    email: "contact@khemahospital.com",
    mapLink: "https://maps.app.goo.gl/yK6zxU5ox5nV9y479",
    description:
      "Full-service international hospital popular with expats, offering emergency care, maternity, cardiology, neurosurgery, dermatology, physiotherapy, and home nursing.",
    phone: "+855 92 616 113",
    address: "No. 18, Street 528, Toul Kork, Phnom Penh",
    link: "https://khemahospital.com/en/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Sen Sok University Hospital",
    badge: "Private",
    image: "../../src/assets/services/sensokiu.png",
    email: "info@sensokiuh.com",
    mapLink: "https://maps.app.goo.gl/KGhmEw8Rs89kZrSLA",
    description:
      "Large private hospital affiliated with a medical university. Staffed by experienced Khmer and international physicians including expat-favourite Dr. Ivan Metala.",
    phone: "+855 23 883 712",
    address:
      "No. 91-96, Street 1986, Sangkat Phnom Penh Thmey, Sen Sok, Phnom Penh",
    link: "https://sensokiuh.com/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Central Hospital Phnom Penh",
    badge: "Private",
    image:
      "https://paragon.com.vn/wp-content/uploads/2022/06/central-hospital-no-82a-154-60f05b9156443.jpg",
    email: "inquiry@central-hospital.com",
    mapLink: "https://maps.app.goo.gl/zg1Qa1m53tAWguc29",
    description:
      "Cambodia's first modern private hospital fully owned by Cambodians, founded in 2011. Equipped with ICU, two operating theatres, surgery, OBGYN, pediatrics, and cardiology.",
    phone: "+855 23 214 955 / +855 95 580 227",
    address:
      "No. 82A, Street 154, Sangkat Phsar Thmey 3, Daun Penh, Phnom Penh",
    link: "https://central-hospital.com/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Khmer-Soviet Friendship Hospital",
    badge: "Public",
    image:
      "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/the_khmer-soviet_friendship_hospital_in_tumnop_teuk_commune_of_phnom_penhs_chamkarmon_district._heng_chivoan.jpg",
    email: "info@ksfh.gov",
    mapLink: "https://maps.app.goo.gl/dMBd2itKtjiCevWi8",
    description:
      "Major 500-bed public hospital originally funded by the Soviet Union, now managed by the Ministry of Health. Provides broad general and specialist public healthcare services.",
    phone: "+855 95 998 593",
    address: "Yothapol Khemarak Phoumin Blvd (271), Phnom Penh",
    link: "https://ksfh.gov.kh/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Preah Ang Duong Hospital",
    badge: "Public",
    image:
      "https://vf-org-media.s3.us-east-2.amazonaws.com/AAcXr8rf-Bq4huzvsusajCceiQqk9M_-H7FjG2mjQAcNs-By0ZAJ06Wdctzeegdiwd8DRt7nXxmddL6BIK6X8Oa7PLj2R9DLpCcCoew=s1600-w1600",
    mapLink: "https://maps.app.goo.gl/4KjaciTfhZ2bAVuS6",
    description:
      "Prominent public referral hospital specializing in dermatology, skin diseases, and general medicine. One of Phnom Penh's oldest and most established healthcare institutions.",
    phone: "+855 23 218 875",
    address:
      "No. 118, Preah Norodom Blvd (41), corner of Kramuon Sar (St. 114), Phnom Penh",
    link: "http://preahangduong.org/",
    icon: "fa-hospital",
  },

  {
    category: "clinics",
    name: "Raffles Medical Phnom Penh",
    badge: "International",
    image:
      "https://www.expatden.com/wp-content/uploads/2022/12/Raffles-Medical-Clinic.jpg",
    email: "enquiries_phnompenh@rafflesmedical.com",
    mapLink: "https://maps.app.goo.gl/pDFaDwupwVpFTJrm8",
    description:
      "Part of the prestigious Singapore-based Raffles Medical Group. Offers family medicine, dermatology, vaccinations, emergency care, X-ray, laboratory, and medical evacuation.",
    phone: "+855 12 816 911",
    address:
      "No. 161, Street 51 (Pasteur), Sangkat Boeung Raing, Daun Penh, Phnom Penh",
    link: "https://rafflesmedical.com.kh/en/",
    icon: "fa-clinic-medical",
  },

  {
    category: "hospitals",
    name: "National Pediatric Hospital",
    badge: "Public",
    image:
      "https://pressocm.gov.kh/wp-content/uploads/2018/05/20180514_PMHS_NATIONAL_HOSPITAL-K057.jpg",
    email: "nphkh.info@gmail.com",
    mapLink: "https://maps.app.goo.gl/pEnx7C9tRTs8jVUn9",
    description:
      "The leading government hospital dedicated entirely to children's healthcare, offering specialized pediatric medicine, surgery, and emergency care for children nationwide.",
    phone: "+855 23 884 137",
    address:
      "No. 100, Confederation de la Russie Blvd (110), Khan 7 Makara, Tuol Kork, Phnom Penh",
    link: "https://www.realestate.com.kh/guides/hospitals-and-clinics-in-cambodia/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Kantha Bopha Children's Hospital",
    badge: "Non-Profit",
    image:
      "https://vodenglish.news/wp-content/uploads/2020/07/2019-kantha-bopha-entrance-phnom-penh-scaled.jpg",
    email: "kunthabophaphnompenh@gmail.com",
    mapLink: "https://maps.app.goo.gl/TVC3YttELFFsNuQn9",
    description:
      "Renowned Swiss-funded children's hospital founded by Dr. Beat Richner providing free high-quality pediatric care to thousands of Cambodian children each year.",
    phone: "+855 23 428 009",
    address: "90 Chivapol (St. 90), Daun Penh, Phnom Penh",
    link: "https://www.beat-richner.ch/",
    icon: "fa-hospital",
  },

  {
    category: "hospitals",
    name: "Preah Kossamak Hospital",
    badge: "Public",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cambodia-China_Friendship_Preah_Kossamak_Hospital.jpg/3840px-Cambodia-China_Friendship_Preah_Kossamak_Hospital.jpg",
    email: "info@ccfkh.com",
    mapLink: "https://maps.app.goo.gl/wmjeq7tChJcTUKxU8",
    description:
      "Long-established public hospital providing general medicine and specialist care including cardiology and oncology, serving a large population of Cambodian patients.",
    phone: "+855 17 335 774 / +855 16 644 557",
    address: "Street 271, Teuk La'ak II, Tuol Kok, Phnom Penh",
    link: "https://www.ccfkh.com/",
    icon: "fa-hospital",
  },

  // ==========================================
  // EMBASSIES
  // ==========================================
  {
    category: "embassies",
    name: "Embassy of Australia",
    badge: "Australia",
    image: "../../src/assets/services/australia.jpg",
    facebook: "https://www.facebook.com/AustralianEmbassyPhnomPenh/",
    facebookName: "Australian Embassy, Cambodia",
    email: "australian.embassy.cambodia@dfat.gov.au",
    mapLink: "https://maps.app.goo.gl/52WUJfH4YGkoFtvC7",
    description:
      "Provides full consular services, visa processing, and diplomatic representation for Australia.",
    phone: "+855 23 266 500 / +855 99 266 500",
    address:
      "16B, National Assembly Street, Sangkat Tonle Bassac, Khan Chamkamon, Phnom Penh",
    link: "https://cambodia.embassy.gov.au/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Brunei Darussalam",
    badge: "Southeast Asia",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNAspab_dyWgyZPANFqLZJhLedTDvZDadu1HrDT=s1360-w1360-h1020-rw",
    facebook:
      "https://www.facebook.com/p/Royal-Embassy-of-Cambodia-in-Brunei-Darussalam-100069094284349/",
    facebookName: "Royal Embassy of Cambodia in Brunei Darussalam",
    email: "phnompenh.cambodia@mfa.gov.bn",
    mapLink: "https://maps.app.goo.gl/vfry3jTdoJZuZmrHA",
    description:
      "Provides diplomatic representation and citizen services for Brunei Darussalam.",
    phone: "+855 23 211 457",
    address: "Street 334, Boeung Keng Kong 1, Chamkarmon, Phnom Penh",
    link: "https://www.mfa.gov.bn/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Canada to Cambodia",
    badge: "North America",
    image: "../../src/assets/services/canada.jpg",
    facebook: "https://www.facebook.com/CanadainCambodia/",
    facebookName: "Canada in Cambodia",
    email: "pnpen@international.gc.ca",
    mapLink: "https://maps.app.goo.gl/VZZmJLkVb6LXizSw7",
    description:
      "Handles consular assistance, notarization, and diplomatic relations for Canadian citizens.",
    phone: "+855 99 430 811",
    address: "Street 75, Sangkat Srass Chak, Phnom Penh",
    link: "https://www.international.gc.ca/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "The Embassy of the People's Republic of China",
    badge: "East Asia",
    image: "../../src/assets/services/china.jpg",
    facebook: "https://www.facebook.com/ChineseEmbassyCambodia/",
    facebookName:
      "Chinese Embassy in Cambodia-中华人民共和国驻柬埔寨王国大使馆",
    email: "chinaemb_kh@mfa.gov.cn",
    mapLink: "https://maps.app.goo.gl/aZt1xdkzVY4zfmLF6",
    description:
      "Provides comprehensive visa services, passport renewal, and representation for the PRC.",
    phone: "+855 12 901 937",
    address: "No.156, Mao Tse Toung Blvd, Phnom Penh",
    link: "https://kh.china-embassy.gov.cn/eng/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of France in Cambodia",
    badge: "Western Europe",
    image:
      "https://img.cambodianess.com/uploads/article/03-2026/1772356524.jpg",
    facebook: "https://www.facebook.com/france.cambodge/",
    facebookName: "Ambassade de France au Cambodge",
    email: "ambafrance.phnom-penh-amba@diplomatie.gouv.fr",
    mapLink: "https://maps.app.goo.gl/5kHgtp1QztwPmLJQ8",
    description:
      "A major diplomatic compound providing Schengen visas and services for French nationals.",
    phone: "+855 23 962 538 ",
    address: "1, Monivong Boulevard, Phnom Penh",
    link: "https://kh.diplomatie.gouv.fr/fr",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of the Federal Republic of Germany",
    badge: "Western Europe",
    image: "../../src/assets/services/germany.png",
    facebook: "https://www.facebook.com/recberlin",
    facebookName:
      "ស្ថានឯកអគ្គរាជទូតកម្ពុជា - Royal Embassy of Cambodia in Berlin",
    email: "info@phnom-penh.diplo.de",
    mapLink: "https://maps.app.goo.gl/fVa6bhk33ViSDFsf9",
    description:
      "Handles German national and Schengen visas, alongside citizen support services.",
    phone: "+855 23 216 193",
    address: "#76-78, Street 214, Phnom Penh",
    link: "https://phnom-penh.diplo.de/kh-en",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of India",
    badge: "South Asia",
    image: "../../src/assets/services/india.png",
    facebook: "https://www.facebook.com/IndiaInCambodia",
    facebookName: "India in Cambodia (Embassy of India, Phnom Penh)",
    email: "cons.phnompenh@mea.gov.in",
    mapLink: "https://maps.app.goo.gl/fttxrkF15w27Xtmm8",
    description:
      "Provides OCI services, visa processing, and consular assistance for Indian citizens.",
    phone: "+855 23 210 912",
    address: "50 Samdach Pan Ave (214), Boeung Raing, Daun Penh, Phnom Penh",
    link: "https://embindpp.gov.in/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Japan in Cambodia",
    badge: "East Asia",
    image: "../../src/assets/services/japan.jpeg",
    facebook: "https://www.facebook.com/JapanEmbassyCambodia",
    facebookName: "Embassy of Japan in Cambodia ស្ថានទូតជប៉ុននៅកម្ពុជា",
    email: "japan.embassy@pp.mofa.go.jp",
    mapLink: "https://maps.app.goo.gl/BkCyBPjn1PjHs4Es9",
    description:
      "Offers consular services, cultural exchange programs, and diplomatic representation for Japan.",
    phone: "+855 23 217 161",
    address:
      "No.194, Moha Vithei Preah Norodom, Tonle Bassac, Chamkar Mon, Phnom Penh",
    link: "https://www.kh.emb-japan.go.jp/itprtop_en/index.html",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Vietnam",
    badge: "Southeast Asia",
    image: "../../src/assets/services/vietnam.png",
    email: "ttcpc@mofa.gov.vn",
    mapLink: "https://maps.app.goo.gl/7yhHbWsSNB6Vf6dQ8",
    description:
      "Handles bilateral relations, cross-border services, and consular duties for Vietnam.",
    phone: "+855 23 726 274",
    address: "436, Preah Monivong Blvd., Phnom Penh",
    link: "https://vnembassy-phnompenh.mofa.gov.vn/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Malaysia",
    badge: "Southeast Asia",
    image: "../../src/assets/services/malaysia.png",
    facebook: "https://www.facebook.com/embassymalaysia/",
    facebookName: "Embassy of Malaysia Phnom Penh",
    email: "mwphnompenh@kln.gov.my",
    mapLink: "https://maps.app.goo.gl/6hvUsT8RH3MiWimF7",
    description:
      "Facilitates visa applications, passport renewals, and support for Malaysian nationals.",
    phone: "+855 23 216 177",
    address:
      "No.220-222, Preah Norodom Blvd., Tonle Bassac, Chamkarmorn, Phnom Penh",
    link: "https://www.kln.gov.my/web/khm_phnom-penh/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of the Philippines",
    badge: "Southeast Asia",
    image: "../../src/assets/services/philippines.png",
    facebook: "https://www.facebook.com/PHLinCambodia",
    facebookName: "Embassy Of The Republic Of The Philippines",
    email: "phnompenh.pe@dfa.gov.ph",
    mapLink: "https://maps.app.goo.gl/oRMENmixbLMcJoM16",
    description:
      "Provides vital consular services, notarization, and overseas voting assistance.",
    phone: "+855 98 888 771",
    address: "182 Preah Norodom Blvd., Tonle Bassac, Chamkarmon, Phnom Penh",
    link: "https://phnompenhpe.dfa.gov.ph/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Russia",
    badge: "Eurasia",
    image: "../../src/assets/services/russia.png",
    facebook: "https://www.facebook.com/RussianEmbassyInCambodia/",
    facebookName: "Embassy of Russia in Cambodia Посольство России в Камбодже",
    email: "russembcam@mid.ru",
    mapLink: "https://maps.app.goo.gl/oBZ41A3zi1ruRY9GA",
    description:
      "Handles diplomatic relations, visas, and consular duties for the Russian Federation.",
    phone: "+855 23 210 931",
    address: "#98, Street 214, Phnom Penh",
    link: "https://embrusscambodia.mid.ru/en/",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "Embassy of Singapore",
    badge: "Southeast Asia",
    image: "../../src/assets/services/singapore.png",
    facebook: "https://www.facebook.com/SingaporeEmbassyPhnomPenh",
    facebookName:
      "Singapore Embassy in Phnom Penh ស្ថានទូតសិង្ហបុរីប្រចាំរាជធានីភ្នំពេញ",
    email: "singemb_pnh@mfa.sg",
    mapLink: "https://maps.app.goo.gl/8GqB1TrcXQcvKNa96",
    description:
      "Provides strategic diplomatic ties and citizen services for Singaporeans abroad.",
    phone: "+855 23 221 875",
    address: "129, Preah Norodom Blvd, Phnom Penh",
    link: "https://www.mfa.gov.sg/phnompenh",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "British Embassy in Cambodia",
    badge: "Western Europe",
    image: "../../src/assets/services/uk.jpeg",
    facebook: "https://www.facebook.com/BritishEmbassyCambodia",
    facebookName: "British Embassy in Cambodia",
    mapLink: "https://maps.app.goo.gl/1yyhJregXfgZtasq7",
    description:
      "Maintains relations between the UK and Cambodia and assists British nationals.",
    phone: "+855 61 300 011",
    address: "27-29 Street 75, Srah Chak, Daun Penh, Phnom Penh",
    link: "https://www.gov.uk/world/organisations/british-embassy-phnom-penh",
    icon: "fa-building-flag",
  },
  {
    category: "embassies",
    name: "U.S. Embassy in Cambodia",
    badge: "North America",
    image: "../../src/assets/services/us.jpg",
    facebook: "https://www.facebook.com/us.embassy.phnom.penh/",
    facebookName: "U.S. Embassy Phnom Penh, Cambodia",
    mapLink: "https://maps.app.goo.gl/GFU655zJRyZ6v5kv5",
    description:
      "Provides American Citizen Services (ACS) and processes all US visa applications.",
    phone: "+855 23 728 000",
    address: "#1, Street 96, Wat Phnom, Daun Penh, Phnom Penh",
    link: "https://kh.usembassy.gov/",
    icon: "fa-building-flag",
  },

  // ==========================================
  // USEFUL APPS
  // ==========================================
  {
    category: "apps",
    name: "Grab",
    badge: "Transport / Food / Delivery",
    image:
      "https://play-lh.googleusercontent.com/qBvv-gIDhyDt1tPXcRNrAdfFA0rGnSZX9BTuP3MS_DIizcmY8oobijdXV77gLfqDgOQ=s96-rw",
    email: "support@grab.com",
    mapLink: "N/A",
    description:
      "The leading app for booking TukTuks, cars, and ordering food delivery in Phnom Penh. Essential for daily transportation.",
    phone: "N/A",
    address: "Available on iOS & Android",
    link: "https://www.grab.com/kh/",
    appStoreLink:
      "https://apps.apple.com/sg/app/grab-food-delivery-taxi-ride/id647268330",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=en",
    icon: "fa-mobile-screen",
    screenshots: [
      "https://play-lh.googleusercontent.com/68Jzjt2uI_Mfdge8dkhrVkRj6go1RwhI70Hwu7bPDHQSzim9y5pH9KqpF3rNP03gbg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/gg3v-GVc8_TrcboPQ56tGCKvNn-abmEkdY0pFk5A7ORhOllq-Fs6Tbgm0JeIJG_RBw=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/ERZWBxyW1-KvXdqzrG3LcbIfSYqAz1E1YKi8RNxsxCveooSynel8Hv6KULgyZL1EqE4=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/KANkwZ8FXYaKBibmR3T_MHFFxx4QrT3nsFc8BrYyAqW52ppa0corqjR1EhgGnWNMQe4=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/KANkwZ8FXYaKBibmR3T_MHFFxx4QrT3nsFc8BrYyAqW52ppa0corqjR1EhgGnWNMQe4=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/1t-lT6D26gZ1qF-hozHMc0D_0ZXzZrOCb7OOVGTdIge-UmmncSK2E7BwnJJfs9KFkQ=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "PassApp",
    badge: "Transport / Delivery",
    image:
      "https://play-lh.googleusercontent.com/d4d4bmmv5HjAF54iMbbTA-O9ebtyheY3jLz6zb_iuSwz76AnOuwErnHN44XBUJ1Vq12W=w480-h960-rw",
    email: "passapptaxis@gmail.com",
    mapLink: "N/A",
    description:
      "The original and highly popular local ride-hailing app for Rickshaws and TukTuks.",
    phone: "+855 16 789 123",
    address: "Available on iOS & Android",
    link: "https://www.passapptaxis.com/",
    appStoreLink:
      "https://apps.apple.com/sg/app/passapp-taxi-and-delivery/id1535615747",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=kh.com.passapp.passenger&hl=en",
    icon: "fa-car",
    screenshots: [
      "https://play-lh.googleusercontent.com/ocNq4xBJ93PILqg94J6dhRT9UDEqhLihGoPrShRxZvJpM50A3fdb6c3Wt2hzANMbRgw=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/q2neHJMeFd3zz0AjFCgnQEgCJhTFH1VDHMnZxfyjeYJ2HX05_zabonRqdnikNR-sQdE=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/OL7S77aXaYv7osPLuy8jpALuWlHO0RnzEVYnTHdySr1PMwrNVnAllavhl6W2sQEL3w=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/E9PAcs5Cct6hIgr8O_F6B71JuTp0hgvLVXWKDTPLcMpk3V9mDLdebo4eHvFn329iDXzB=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/N4pE22M8XH3rZdri2iP1kX0l7qpTZrxkKUnbNi5WaV3yBK535gP5PsMb5c5Q-FuOptE=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "ABA Mobile",
    badge: "Banking",
    image:
      "https://play-lh.googleusercontent.com/WU6sZMD1UspzwqYnlACtmN60rckp8hoINSgsR21mKLJBbsHPwXtzwvOocpjC7FcO1g=w480-h960-rw",
    email: "info@ababank.com",
    mapLink: "N/A",
    description:
      "The dominant mobile banking app in Cambodia. Essential for QR payments, transfers, and bill payments.",
    phone: "+855 23 225 333",
    address: "Available on iOS & Android",
    link: "https://www.ababank.com/",
    appStoreLink: "https://apps.apple.com/sg/app/aba-mobile-bank/id968860649",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.paygo24.ibank&hl=en",
    icon: "fa-money-bill-transfer",
    screenshots: [
      "https://play-lh.googleusercontent.com/hMZxOOcFxgpGgtip7yp24OUep_m5JPEDpOV-H7eDsdn2NIIyQ9Ql8PNaAn1mJsbQ_Duv=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/iM9LuIL1j4Q_5uYALX2c3jo0f2n5AtqJeBSfsIYJCMRNxaiWLxfkintuA2gHuGkV_AAY=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/A3Bu-Mr3oW5yqLIiqm85JGlurN2o40hxHw9iUbFXY-Su2fcOoMUEdt7gUp_078aFydo=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/DBAqffX1xT__MLEbKyCKR2fTuno6YYvJUV2zCVw_0y4-gFcPPxI8gbPqXIdS2diy0Q=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/eAm54LL9MRHme-nMo1LJurttol8KZeEEMsdlr8cfZkIF9odavfyVKvE2ag3XJwG3C-s=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/fpCulVE9I0A-5nz2l5QS6Hgaj-o3Y5yFJgHFwa9STghIeDhthbHi2I4Bx6kHq56W_Q2p=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/GE4fyE0m3iCS7lmQl0XpWCk6YslxRX-sqTcwRK_1iCNuklhjpvbfUfMmcfC1X0cEfQ=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/jdtf-Bj_3lv115aHLVkAGEbkNMse5auO-MOkLHxVZ-fR6XX6y8khyJpan-IP7X1CWg=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "Bakong Tourists",
    badge: "Payments",
    image:
      "https://play-lh.googleusercontent.com/wbq0do8pcJB2a38z-8u5UkQIfbcnVLekyTUbzNAX3E7NQpU8VH5hHemB0fAOsI8xbg=w480-h960-rw",
    email: "info@bakong.nbc.gov.kh",
    mapLink: "N/A",
    description:
      "The National Bank of Cambodia's second official payment app, specifically made for tourists, for cross-bank QR payments and transfers.",
    phone: "+855 23 722 563",
    address: "Available on iOS & Android",
    link: "https://bakong.nbc.gov.kh/en/",
    appStoreLink: "https://apps.apple.com/sg/app/bakong-tourists/id6471774666",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=kh.gov.nbc.bakong.tourist&hl=en",
    icon: "fa-qrcode",
    screenshots: [
      "https://play-lh.googleusercontent.com/9_slU8DbWGzyVWRFkbcreMnrvoupfAmGV4z4WoRJrAzgX5mpk_9AmMY6k_SpyEb65lCD=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/1PyA1cCx2IBH1XhVyyaXVh6gQm5fQ09EO3uwSlO3_r4_60SK_TaNWOH9SEo1Z19OHQ=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/OlPCcgEpQRQgO4ZWbU--bSuT60Opmy-sdS6Ng8LTSLA7t7JBUTGN0Vj8YD4SwBEmCA=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/RC2O5vHYImdfQeK7laKPg6nxECd3Sdc6YaEGJtfJrd0ygBCMfhXy1gIqBVj0o8oBCeg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/zbZ36Pv0o8EWRKtJRgC9WJ8hFkEZwZNy4a81pfKv160PdMbciQ1ybUp0hPuXq_OJ4RU=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/TSLcwTxKEgXQzD23GEWXtG9XCH2sA-ScxkUct-s5ocDG0DGSGYHPxMaU8HMLUq-6zng=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "TranslateKH",
    badge: "Utility",
    image:
      "https://play-lh.googleusercontent.com/DbJMqffqIofJC_8sxgVH6QKgR6bPMr4HmkxXrJulxxqMEervY8isVyGDmyeeUaah7hw=w480-h960-rw",
    email: "acheadeth-lay@mptc.gov.kh",
    mapLink: "N/A",
    description:
      "Official government AI translation app for Khmer, featuring text, voice, and image translation.",
    phone: "+855 77 630 182",
    address: "Available on iOS & Android",
    link: "https://translatekh.mptc.gov.kh/",
    appStoreLink: "https://apps.apple.com/sg/app/translatekh/id6740014920",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mptc.translatekh&hl=en",
    icon: "fa-language",
    screenshots: [
      "https://play-lh.googleusercontent.com/_fkRlWksAcUq3VYdOpF3tlcTwwj8YY_c6KztWq6hv2QkpMSG1UbghvgOCBCflfCD49g=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/WsbQYDpbFS3hiTwLQsayBdVaL5-5pYPURYVWuOzRfdWKtbde4dp1Z8oVRSy1FApgWoY=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/-O43f-6YJd8fteu4x2LYqUxRR5sDTkLsGsmovIxmfFETG1TvMC7sWW_u60Z_uKU_rxA=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/k6MueLRD57D04MigZn5qJV67ModPWhgjjVXVaS4PwM8FCinJmyMVkj4AM81tV7tAE3E=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/6gFUAw0l2dcSq_Owbm-4VXSvAAUfGPP6gdJak41ihVdFxEwUVET35dyBwDnwRR1vAYw=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/DcsGKiNKIaG0EGcdvFrw98pP71Lu9ftrBT4H3N5Ih02yPIOJxP8SB2NPZ2KhVfL21Tg=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "Telegram",
    badge: "Communication",
    image:
      "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=w480-h960-rw",
    email: "support@telegram.org",
    mapLink: "N/A",
    description:
      "The primary messaging app used by businesses, government agencies, and locals for everything.",
    phone: "+971 54 202 2222",
    address: "Available on all platforms",
    link: "https://telegram.org/",
    appStoreLink:
      "https://apps.apple.com/sg/app/telegram-messenger/id686449807",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en",
    icon: "fa-telegram",
    screenshots: [
      "https://play-lh.googleusercontent.com/wlwY1vowGxTrvQMRDHJD21iYBG7S_E09QbKPY-L6dqEc4UxCi0fDQiNuCBonFYED1yU=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/xdjWKko-a2DFtICA6tfP0vXSBIDTFl_iprhVQb9HnS-rGjyR1wZckqM721qHsF-2z0U=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/NaeXtT-aGP9_R8LROs3XyWVc6eU7sxYuuywNwg3c99AjRtj6cCoPaJynhP0t8uynF6hm=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/J5JG9T92CSZopWKloI00_DsmyQprRvEwItBwPkESjcAlIKy5v4ae3T4pmbH1sWFf3RTQ=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/9HoCw2kOVFD504YpjDyk1Aa5WtcbDsxS_wesF-yT-5iHEvRgHZXT22g2clFXGGwoCTOt=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/bDGf2oHe1y_uaFE6XCh2kYicn3-1yiLMTI5hae9s5zMaNPzOpj04An1URWQyw5m5JhA=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/v0zodHEHUcMgUZSK490M9L5c3Grk5pkDHL-TTdfQK3098Wg0W2bxbK1-cmgN9aKEuQ=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/-4x3oxK3bMWXTpwPrlai_HYHcHnH_sa8KvYj5KvYPwjSZV7rsg4kpIafYhfnRvBsUtc=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "Foodpanda",
    badge: "Food / Delivery",
    image:
      "https://play-lh.googleusercontent.com/e5GPTe3zNL4KKPvywZhXFeiDUaowHmlLLCoYjkbw0QGu5LUT39QrL65n2X74IBbCeUEn=w480-h960-rw",
    email: "appsupport@foodpanda.com",
    mapLink: "N/A",
    description:
      "International food delivery app with a massive selection of restaurants in Phnom Penh.",
    phone: "+1 320 331 8283",
    address: "Available on iOS & Android",
    link: "https://www.foodpanda.com.kh/en/",
    appStoreLink:
      "https://apps.apple.com/sg/app/foodpanda-food-groceries/id758103884",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.global.foodpanda.android&hl=en",
    icon: "fa-bowl-food",
    screenshots: [
      "https://play-lh.googleusercontent.com/BkL3lM43uXy83kVTY5WcAoSgHf6BhcarIi5CF8QIagdm757Gvn9wMRiquXBxFunN2D1I=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/7mDwnCj8kob1WQEw8Ga___4_VNTs-ZWNxEwB6dTqPumkcD-RIrQtCw7DM0AH85n3WZk=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/DJ6VEMujhvsWXIYQ4QPF7SVfkHWzkL73Lr0QVtgZth-3C5kiUwPdLVFErkf-O90pwg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/KGZaDPFJ7qeLKFWWhI4xrpxAciYafnKtA_weCwE-CJLtlz2R03KjQHhLk4kMt1rrRUEk=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/IyYdrw-JNmzw8JnniZFAlGPmTJP_kVh_aUiQpl6oulbWKnhx-Wj4ydpwS6v6FJYJqn8=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/ONreh-XbAtwSGYaOckjWxOHmhO7uUddiMB5XUw-lkyF-_-mb5vh1n_5FHxq-HwO1kS4=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/B1cgJMw2_Eyk2dAlSP8zv97_I0mEX-phpjl-pFf2DNTEkM0ucTvxS2CBRSxvWDRxtjQ=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "E-GetS",
    badge: "Food / Delivery",
    image:
      "https://play-lh.googleusercontent.com/exMf7qTDCqngwPbi1l9fK0tWXuLLtCKOwH1CuJPstpPzH3DWLZnwN61__FT-_WNGGz4=s96-rw",
    email: "service@e-gets.com",
    mapLink: "N/A",
    description:
      "Convenient delivery service covering food, groceries, and errand running in Phnom Penh.",
    phone: "+855 23 238 999",
    address: "Available on iOS & Android",
    link: "https://www.e-gets.com/",
    appStoreLink:
      "https://apps.apple.com/sg/app/e-gets-food-drink-delivery/id1409034551",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.egets.takeaways&hl=en",
    icon: "fa-motorcycle",
    screenshots: [
      "https://play-lh.googleusercontent.com/GG3UrZkPuIrcg3u0bHmxHCMx7PNRLzCK9bRMqFkfRHVF__zL2VuS8lv_RhrvH6uvQ_Gp=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/FQbFUMRx_InrQ5A7vxsqcp9eiLPDB3GNX4vDZyYpSlekt555QXDz89KUslAFlilGeP_F=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/oHpiUSE4egUlmEDUF0YM3EEjKHVbdMNryhQqc94-7B4m0_HwTjS6j69qdo0na8C7iA=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/WeLvvtJ16-2KFY4yVqaBQh9GT0peXco-ZV5spT02HxSXvYq7JDv-AZxUwVXnZbVMs-E=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/_oTZcYC-tGlHp4VhtFKmfAHiRKJZr5h5OyKBjTjvldIGvI2QPQ-PgBRzDkd7qBhawFA=w1052-h592-rw",
    ],
  },
  {
    category: "apps",
    name: "Khmer24",
    badge: "Marketplace",
    image:
      "https://play-lh.googleusercontent.com/1oPRKvscTnDjSwwrZlsbS6CGwblLFosiTfSvbtoK2l5eQapwkcQnhm-YWkoBxm64zA=w480-h960-rw",
    email: "info@khmer24.com",
    mapLink: "N/A",
    description:
      "The largest classifieds marketplace in Cambodia for buying/selling used goods, cars, and housing.",
    phone: "+855 99 888 885",
    address: "Available on iOS & Android",
    link: "https://www.khmer24.com/",
    appStoreLink: "https://apps.apple.com/sg/app/khmer24/id1133793397",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=khmer24.com&hl=en",
    icon: "fa-store",
    screenshots: [
      "https://play-lh.googleusercontent.com/cvI_3qMQjWbW9taSLNgfzwvrXzhbShT-As21PC9z0iJ0bNDRumgmhQiQMhCDuKpDmf6Y2jGT8H9i0ty4kWxCmg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/YBQI-kSWpAyXbXba-nILMcTAGjSjr-MgLS_HeFlRrimXq4Fi0l-JyHOYypDt72G0Cq1CciKAikd7yeghOD0o=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/GYyZFfv9LWno4RTr0Pyc_57wInaG3mJ8QvzqF5RMY3LUpZu_kIdyTDocqCVt8g9O7oEG2PSleydQXAmU72-aiA=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/LqZgVD4d5cUE-Axj8IjJeN_EjYip12AWYbar1qbuzhmKX6bOc1Zi_ppkdjMudIJneltH_BuR_h8Ydu4ZcTxEbg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/kdOvT4IEGE7wN7fQS3Yoipqx-HbGmRSNdPDYFGtV-Rog6xhJvswbKBfgfnHdjSeh29pzeRymTiv-cNeVRVWKAw=w1052-h592-rw",
    ],
  },
]

// ==========================================
// PAGINATION STATE
// ==========================================
let currentPage = 1
const itemsPerPage = 18 // <-- Increase this to 12, 15, or 18!

// Global function to jump to a specific page
window.goToPage = function (pageNumber) {
  currentPage = pageNumber
  renderCards()
  // Smoothly scroll back to the top of the cards when the page changes
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// ==========================================
// FILTER STATE & CUSTOM DROPDOWN LOGIC
// ==========================================
let currentFilter = "All"

// Opens and closes the menu
window.toggleFilterDropdown = function (event) {
  event.stopPropagation() // Stops the click from instantly triggering the document click listener below
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

// Closes the menu if they click anywhere else on the screen!
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
  document.getElementById("selectedFilterText").textContent = label // Update the button text
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

  // Math Check 1: Is the content actually wider than the container? (Needs scroll)
  const isScrollable = container.scrollWidth > container.clientWidth + 5

  // Math Check 2: Have we scrolled to the absolute right edge?
  const isAtEnd =
    container.scrollLeft + container.clientWidth >= container.scrollWidth - 5

  // If it doesn't need to scroll OR we are at the end, force the arrow to hide!
  if (!isScrollable || isAtEnd) {
    arrow.classList.add("!opacity-0")
  } else {
    // Otherwise, let the hover effect work normally
    arrow.classList.remove("!opacity-0")
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
        // For apps, split the tags and add them individually!
        const tags = getAppTags(item.badge)
        tags.forEach((tag) => uniqueGroups.add(tag))
      } else {
        uniqueGroups.add(getMasterGroup(item, currentCategory))
      }
    })

    // Sort the categories alphabetically, but force "All" to be at the very top
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
          const tags = getAppTags(item.badge) // Uses the new helper function!

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
        .flip-container { perspective: 1000px; }
        .flip-inner { transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .flip-front, .flip-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }
        .is-flipped { transform: rotateY(180deg); }
        .is-flipped .flip-front { pointer-events: none; }
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
      // ALWAYS reset to page 1 when the user types a new search!
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

  // Data is now split into 'category' and 'name' for smart grouping!
  const emergencyTableData = [
    // --- Core Medical & Rescue ---
    { category: "Emergency & Rescue", name: "SAMU Ambulance", phone: "119" },
    {
      category: "Emergency & Rescue",
      name: "Firefighters Department",
      phone: "118 / 666",
    },
    {
      category: "Emergency & Rescue",
      name: "Police Department",
      phone: "117 / +855 97 778 0002",
    },

    // --- Phnom Penh City Hall ---
    {
      category: "Phnom Penh Capital Hall",
      name: "Receive complaints and other information",
      phone: "1299",
    },
    {
      category: "Phnom Penh Capital Hall",
      name: "COVID-19 Hotline",
      phone: "1222",
    },

    // --- Hospitals & Health Centers ---
    {
      category: "Hospitals & Health Centers",
      name: "Calmette Hospital",
      phone: "+855 77 851 221",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Khmer-Soviet Friendship Hospital",
      phone: "+855 78 997 978",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Preah Ang Duong Hospital",
      phone: "+855 96 883 7878",
    },
    {
      category: "Hospitals & Health Centers",
      name: "National Maternal and Child Health Center",
      phone: "+855 12 222 773 / +855 23 724 257",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Cambodia Blood Service",
      phone: "+855 92 998 000 / +855 93 998 00",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Phnom Penh Municipal Referral Hospital",
      phone: "+855 77 559 983",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Kantha Bopha Children's Hospital",
      phone: "+855 23 428 009",
    },
    {
      category: "Hospitals & Health Centers",
      name: "Preah Ket Mealea Hospital",
      phone: "+855 23 427 229",
    },

    // --- Ministry of Interior ---
    {
      category: "Ministry of Interior",
      name: "Public Security",
      phone: "1283",
    },
    { category: "Ministry of Interior", name: "Immigration", phone: "1284" },
    {
      category: "Ministry of Interior",
      name: "Human Trafficking",
      phone: "1288",
    },
    {
      category: "Ministry of Interior",
      name: "Identification Work",
      phone: "1271",
    },
    {
      category: "Ministry of Interior",
      name: "Broadcast Radio & Interactive TV",
      phone: "1276",
    },
    {
      category: "Ministry of Interior",
      name: "Monitoring Mail & Registration",
      phone: "1290",
    },

    // --- Other Ministries ---
    {
      category: "Ministry of Health",
      name: "Report Infectious Diseases",
      phone: "115 / +855 12 825 424",
    },
    {
      category: "Ministry of Health",
      name: "Mental Health Counseling Related to COVID-19",
      phone: "1293",
    },
    {
      category: "Ministry of Posts and Telecommunications",
      name: "Public services",
      phone: "123 / 1250",
    },
    { category: "Ministry of Commerce", name: "Call Center", phone: "1266" },
    {
      category: "Ministry of Agriculture, Forestry and Fisheries",
      name: "Avian Influenza",
      phone: "1287 / 1289",
    },
    {
      category: "Ministry of Inspection",
      name: "Public Reporting System",
      phone: "1268",
    },
    {
      category:
        "Ministry of Social Affairs, Veterans, and Youth Rehabilitation",
      name: "Consulting services for citizens with disabilities",
      phone: "1270",
    },
    {
      category:
        "Ministry of Social Affairs, Veterans, and Youth Rehabilitation",
      name: "Social Assistance Program",
      phone: "1274",
    },
    {
      category: "Ministry of Public Works and Transport",
      name: "Public services",
      phone: "1275",
    },
    {
      category: "Ministry of Labor and Vocational Training",
      name: "Occupational Accidents",
      phone: "1286",
    },
    {
      category: "Ministry of Labor and Vocational Training",
      name: "Labour Law",
      phone: "1297",
    },
    {
      category: "Ministry of Industry, Science, Technology, and Innovation",
      name: "Inquiries about the informal economy registration",
      phone: "1264",
    },
    {
      category: "Ministry of Industry, Science, Technology, and Innovation",
      name: "Public services",
      phone: "1265",
    },
    { category: "Ministry of Tourism", name: "General Hotline", phone: "1221" },

    // --- Committees, Authorities & Other Gov Bodies ---
    {
      category: "National Authorities & Committees",
      name: "National Authority for Combating Drugs (NACD)",
      phone: "1233",
    },
    {
      category: "National Authorities & Committees",
      name: "Ad-Hoc Committee for Combating Tech Scams",
      phone: "1246 / 1247",
    },
    {
      category: "National Authorities & Committees",
      name: "National Committee for Disaster Management",
      phone: "1294",
    },
    {
      category: "National Authorities & Committees",
      name: "National Election Committee",
      phone: "1285",
    },
    {
      category: "National Authorities & Committees",
      name: "Anti-Corruption Unit",
      phone: "1282",
    },
    {
      category: "National Authorities & Committees",
      name: "National Audit Authority: Health Equity Fund",
      phone: "1273",
    },
    {
      category: "National Authorities & Committees",
      name: "Telecommunication Regulator of Cambodia (TRC)",
      phone: "6789",
    },
    {
      category: "National Authorities & Committees",
      name: "General Department of Customs and Excise",
      phone: "1223",
    },
    {
      category: "National Authorities & Committees",
      name: "General Department of Taxation",
      phone: "1277",
    },
    {
      category: "National Authorities & Committees",
      name: "Bar Association of Cambodia: Legal Services for Poor",
      phone: "1281",
    },
    {
      category: "National Authorities & Committees",
      name: "Telecom Data Center: Device Identity / Customer Service",
      phone: "1205",
    },
    {
      category: "National Authorities & Committees",
      name: "Telecom Data Center: EIRS Testing",
      phone: "1251",
    },
    {
      category: "National Authorities & Committees",
      name: "Inter-Ministerial Committee: Migrant Workers Entry/Exit",
      phone: "1244",
    },
    {
      category: "National Authorities & Committees",
      name: "National Committee: Land Concession & Forest Protection",
      phone: "1255",
    },

    // --- Police, Military & Gendarmerie ---
    {
      category: "Police, Military & Gendarmerie",
      name: "General Commissariat of National Police",
      phone: "1245",
    },
    {
      category: "Police, Military & Gendarmerie",
      name: "Phnom Penh Gendarmerie",
      phone: "1291",
    },
    {
      category: "Police, Military & Gendarmerie",
      name: "Royal Cambodian Army Headquarters",
      phone: "711",
    },
    {
      category: "Police, Military & Gendarmerie",
      name: "Kampong Speu Provincial Gendarmerie",
      phone: "1292",
    },
    {
      category: "Police, Military & Gendarmerie",
      name: "Siem Reap Provincial Gendarmerie",
      phone: "1296",
    },
    {
      category: "Police, Military & Gendarmerie",
      name: "Takeo Provincial Royal Gendarmerie",
      phone: "1212",
    },

    // --- Utilities & Other Services ---
    {
      category: "Utilities, NGOs & Other Services",
      name: "Electricite Du Cambodge (EDC)",
      phone: "1298",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "Expressway Service",
      phone: "1399",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "Child Helpline Cambodia",
      phone: "1280",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "UNICEF Cambodia",
      phone: "1279",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "Family Health International 360",
      phone: "1295",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "Cambodia Post",
      phone: "2888",
    },
    {
      category: "Utilities, NGOs & Other Services",
      name: "Preah Vihear Provincial Administration",
      phone: "4333",
    },
  ]

  // Make sure the search bar checks the category name too!
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
