/**
 * ==========================================================================
 * TRAVEL AGENCY PORTAL - DYNAMIC LOGIC (app.js)
 * Simplified learning edition for secondary school web technology students.
 * ==========================================================================
 */

// 1. DATA: 8 VACATION PACKAGES (Streamlined & structured)
const travelPackages = [
  {
    id: "japan",
    title: "7D6N Japan Golden Route + Disneyland",
    country: "Japan",
    continent: "Asia",
    packageOnlyPrice: 5499,
    flightPrice: 7299,
    duration: "7 Days",
    rating: "4.9",
    badge: "Top Rated",
    image: "images/packages/japan.jpg",
    alt: "Mount Fuji reflected in a lake in Japan",
    description: "A first-time Japan route covering Tokyo, Tokyo Disneyland, Mt Fuji, Kyoto and Osaka, combining major sights, culture and a full theme-park day.",
    link: "package.html?id=japan",
    inclusions: ["6 nights accommodation", "Daily hotel breakfast", "Airport transfers in Japan", "Local and intercity transportation", "Tokyo Disneyland 1-Day Passport", "Mt Fuji excursion", "Selected attraction admission", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Tokyo", text: "Arrive in Tokyo, transfer to the hotel and enjoy a free evening." },
      { day: "Day 2: Tokyo City", text: "Visit Asakusa and Senso-ji before continuing to Harajuku and Shibuya." },
      { day: "Day 3: Tokyo Disneyland", text: "Spend a full day at Tokyo Disneyland." },
      { day: "Day 4: Tokyo → Mt Fuji", text: "Travel to Lake Kawaguchi and selected scenic areas around Mt Fuji." },
      { day: "Day 5: Mt Fuji → Kyoto → Osaka", text: "Visit Fushimi Inari in Kyoto before continuing to Osaka." },
      { day: "Day 6: Osaka", text: "Visit Osaka Castle, Shinsaibashi and Dotonbori." },
      { day: "Day 7: Osaka → Kuala Lumpur", text: "Free time depending on the flight schedule, followed by the return journey." }
    ]
  },
  {
    id: "france",
    title: "8D7N Paris & Provence Escape",
    country: "France",
    continent: "Europe",
    packageOnlyPrice: 7499,
    flightPrice: 10499,
    duration: "8 Days",
    rating: "4.8",
    badge: "Best Seller",
    image: "images/packages/france.jpg",
    alt: "Eiffel Tower overlooking Paris, France",
    description: "Explore the landmarks and museums of Paris before travelling south to Avignon for the historic towns and slower pace of Provence.",
    link: "package.html?id=france",
    inclusions: ["7 nights accommodation", "Daily hotel breakfast", "Airport transfers in France", "Paris–Avignon rail journey", "Seine River cruise", "Louvre Museum admission", "Versailles excursion", "Provence regional excursion", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Paris", text: "Arrive in Paris, transfer to the hotel and enjoy a free evening." },
      { day: "Day 2: Classic Paris", text: "Visit the Eiffel Tower area and Champs-Élysées before an evening Seine cruise." },
      { day: "Day 3: Art & Montmartre", text: "Visit the Louvre, then continue to Montmartre and Sacré-Cœur." },
      { day: "Day 4: Versailles", text: "Take a full-day excursion to the Palace of Versailles." },
      { day: "Day 5: Paris → Avignon", text: "Travel south by rail and explore Avignon's historic centre." },
      { day: "Day 6: Provence Villages", text: "Spend the day visiting selected villages and countryside around Provence." },
      { day: "Day 7: Avignon Free Day", text: "Enjoy free time for local food, shopping or independent exploration." },
      { day: "Day 8: Departure", text: "Transfer for the return journey to Kuala Lumpur." }
    ]
  },
  {
    id: "italy",
    title: "9D8N Classic Italy Journey",
    country: "Italy",
    continent: "Europe",
    packageOnlyPrice: 7299,
    flightPrice: 10299,
    duration: "9 Days",
    rating: "4.9",
    badge: "Cultural Tour",
    image: "images/packages/italy.jpg",
    alt: "Colosseum in Rome, Italy",
    description: "Travel through Rome, Florence, Tuscany and Venice, combining ancient landmarks, Renaissance heritage, regional food and Venice's canals.",
    link: "package.html?id=italy",
    inclusions: ["8 nights accommodation", "Daily hotel breakfast", "Airport transfers in Italy", "Rome–Florence high-speed rail", "Florence–Venice high-speed rail", "Selected attraction admission", "Tuscan cooking experience", "Tuscany day excursion", "Venice gondola ride", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Rome", text: "Arrive in Rome, transfer to the hotel and settle in." },
      { day: "Day 2: Ancient Rome", text: "Visit the Colosseum and Roman Forum before exploring central Rome." },
      { day: "Day 3: Vatican & Central Rome", text: "Visit the Vatican area, Trevi Fountain and Spanish Steps." },
      { day: "Day 4: Rome → Florence", text: "Travel by high-speed rail and visit the Duomo area and Ponte Vecchio." },
      { day: "Day 5: Florence & Tuscan Food", text: "Explore Florence and join a Tuscan cooking experience." },
      { day: "Day 6: Tuscany", text: "Take a day excursion to Siena and the Tuscan countryside." },
      { day: "Day 7: Florence → Venice", text: "Travel to Venice and explore St Mark's Square and the Rialto area." },
      { day: "Day 8: Venice", text: "Explore Venice at a relaxed pace and enjoy a gondola ride." },
      { day: "Day 9: Venice → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  },
  {
    id: "egypt",
    title: "7D6N Cairo & Luxor",
    country: "Egypt",
    continent: "Africa",
    packageOnlyPrice: 5999,
    flightPrice: 8499,
    duration: "7 Days",
    rating: "4.7",
    badge: "Ancient Wonders",
    image: "images/packages/egypt.jpg",
    alt: "Pyramids of Giza in Egypt",
    description: "Discover Egypt's ancient landmarks across Cairo, Giza and Luxor, from the Pyramids and Sphinx to the temples and royal tombs of Luxor.",
    link: "package.html?id=egypt",
    inclusions: ["6 nights accommodation", "Daily hotel breakfast", "Airport transfers in Egypt", "Cairo–Luxor domestic flight", "Giza Plateau admission", "Grand Egyptian Museum admission", "Luxor archaeological excursions", "Nile felucca sailing", "Scheduled local transportation", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Cairo", text: "Arrive in Cairo, transfer to the hotel and settle in." },
      { day: "Day 2: Giza", text: "Visit the Pyramids of Giza, Great Sphinx and Grand Egyptian Museum." },
      { day: "Day 3: Historic Cairo", text: "Explore Historic Cairo and Khan el-Khalili." },
      { day: "Day 4: Cairo → Luxor", text: "Fly to Luxor and visit Karnak and Luxor Temple." },
      { day: "Day 5: West Bank of Luxor", text: "Visit the Valley of the Kings and Hatshepsut Temple." },
      { day: "Day 6: Nile & Luxor", text: "Enjoy free time followed by a felucca sailing experience on the Nile." },
      { day: "Day 7: Luxor → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  },
  {
    id: "australia",
    title: "10D9N Australian City & Coast",
    country: "Australia",
    continent: "Oceania",
    packageOnlyPrice: 6999,
    flightPrice: 8999,
    duration: "10 Days",
    rating: "4.8",
    badge: "Trending",
    image: "images/packages/australia.jpg",
    alt: "Sydney Opera House beside Sydney Harbour, Australia",
    description: "Combine Sydney and Melbourne with the Blue Mountains and Great Ocean Road, balancing organised excursions with free time in both cities.",
    link: "package.html?id=australia",
    inclusions: ["9 nights accommodation", "Daily hotel breakfast", "Airport transfers in Australia", "Sydney–Melbourne domestic flight", "Sydney city activities", "Blue Mountains day excursion", "Melbourne city activities", "Great Ocean Road excursion", "Scheduled local transportation", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Sydney", text: "Arrive in Sydney, transfer to the hotel and enjoy a free evening." },
      { day: "Day 2: Sydney Harbour", text: "Explore the Opera House area, Circular Quay, The Rocks and harbour viewpoints." },
      { day: "Day 3: Sydney Coast", text: "Visit Bondi Beach and Sydney's coastal areas." },
      { day: "Day 4: Blue Mountains", text: "Take a full-day excursion to the Blue Mountains and Three Sisters." },
      { day: "Day 5: Sydney Free Day", text: "Enjoy shopping, museums or optional attractions at your own pace." },
      { day: "Day 6: Sydney → Melbourne", text: "Fly to Melbourne and explore the city centre after arrival." },
      { day: "Day 7: Melbourne City", text: "Visit Federation Square, city laneways and Queen Victoria Market." },
      { day: "Day 8: Great Ocean Road", text: "Take a full-day coastal excursion including the Twelve Apostles area." },
      { day: "Day 9: Melbourne Free Day", text: "Enjoy a flexible final day in Melbourne." },
      { day: "Day 10: Melbourne → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  },
  {
    id: "brazil",
    title: "7D6N Rio & Nature Escape",
    country: "Brazil",
    continent: "South America",
    packageOnlyPrice: 6499,
    flightPrice: 10499,
    duration: "7 Days",
    rating: "4.6",
    badge: "Tropical",
    image: "images/packages/brazil.jpg",
    alt: "Christ the Redeemer overlooking Rio de Janeiro, Brazil",
    description: "Experience Rio through its famous viewpoints, beaches, neighbourhoods and surrounding tropical landscape.",
    link: "package.html?id=brazil",
    inclusions: ["6 nights accommodation", "Daily hotel breakfast", "Airport transfers in Brazil", "Christ the Redeemer visit", "Sugarloaf Mountain cable car", "Tijuca Forest excursion", "Scheduled local transportation", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Rio de Janeiro", text: "Arrive in Rio, transfer to the hotel and settle in." },
      { day: "Day 2: Rio Highlights", text: "Visit Christ the Redeemer and selected central Rio sights." },
      { day: "Day 3: Sugarloaf & Coast", text: "Visit Sugarloaf Mountain before continuing to Copacabana." },
      { day: "Day 4: Tijuca Forest", text: "Take a guided excursion into Tijuca Forest." },
      { day: "Day 5: Ipanema & Local Culture", text: "Explore Ipanema and selected cultural districts." },
      { day: "Day 6: Rio Free Day", text: "Enjoy the beach, shopping or optional activities." },
      { day: "Day 7: Rio → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  },
  {
    id: "usa",
    title: "8D7N California Highlights",
    country: "USA",
    continent: "North America",
    packageOnlyPrice: 7499,
    flightPrice: 10999,
    duration: "8 Days",
    rating: "4.7",
    badge: "City & Coast",
    image: "images/packages/usa.jpg",
    alt: "Golden Gate Bridge on the California coast, USA",
    description: "Explore Los Angeles and San Francisco with entertainment districts, Pacific coastal scenery and the best-known landmarks of both cities.",
    link: "package.html?id=usa",
    inclusions: ["7 nights accommodation", "Daily hotel breakfast", "Airport transfers in California", "Los Angeles–San Francisco transportation", "Los Angeles city activities", "San Francisco city activities", "California coastal excursion", "Selected attraction admission", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Los Angeles", text: "Arrive in Los Angeles, transfer to the hotel and settle in." },
      { day: "Day 2: Los Angeles Highlights", text: "Visit Hollywood, Griffith Observatory and selected city sights." },
      { day: "Day 3: Santa Monica & Coast", text: "Spend the day around Santa Monica and coastal Los Angeles." },
      { day: "Day 4: Los Angeles Free Day", text: "Choose shopping, museums or optional attractions." },
      { day: "Day 5: Los Angeles → San Francisco", text: "Travel north to San Francisco and enjoy a free evening." },
      { day: "Day 6: San Francisco", text: "Visit the Golden Gate Bridge, Fisherman's Wharf and selected city districts." },
      { day: "Day 7: California Coast & Nature", text: "Take a regional excursion focused on coastal and natural scenery." },
      { day: "Day 8: San Francisco → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  },
  {
    id: "canada",
    title: "8D7N Canadian Rockies Adventure",
    country: "Canada",
    continent: "North America",
    packageOnlyPrice: 7299,
    flightPrice: 10499,
    duration: "8 Days",
    rating: "4.9",
    badge: "Nature Escape",
    image: "images/packages/canada.jpg",
    alt: "Lake Louise surrounded by the Canadian Rockies, Canada",
    description: "A mountain-focused journey from Calgary into Banff and the Canadian Rockies, featuring lakes, scenic roads and time outdoors.",
    link: "package.html?id=canada",
    inclusions: ["7 nights accommodation", "Daily hotel breakfast", "Airport transfers in Canada", "Rockies ground transportation", "Banff excursion", "Lake Louise visit", "Icefields Parkway scenic journey", "Selected park activities", "English-speaking tour coordinator"],
    itinerary: [
      { day: "Day 1: Kuala Lumpur → Calgary", text: "Arrive in Calgary, transfer to the hotel and settle in." },
      { day: "Day 2: Calgary → Banff", text: "Travel into the Rockies and explore Banff after arrival." },
      { day: "Day 3: Banff", text: "Explore Banff and selected surrounding viewpoints." },
      { day: "Day 4: Lake Louise", text: "Visit Lake Louise and nearby mountain scenery." },
      { day: "Day 5: Icefields Parkway", text: "Take a scenic journey through the Canadian Rockies with selected viewpoint stops." },
      { day: "Day 6: Rockies Free Day", text: "Choose an easy nature walk, sightseeing or relaxed exploration." },
      { day: "Day 7: Banff → Calgary", text: "Return to Calgary and enjoy a free evening." },
      { day: "Day 8: Calgary → Kuala Lumpur", text: "Transfer for the return journey." }
    ]
  }
];

// 2. ROUTING ENTRY POINT
document.addEventListener("DOMContentLoaded", () => {
  initThemeEngine();

  if (document.getElementById("homepage-showcase")) {
    renderHomepageShowcase();
  }
  initReviewModule();
  // Hero slideshow (homepage only)
  if (document.getElementById("hero-slideshow")) {
    initHeroSlideshow();
  }
  // Customer reviews carousel (homepage only)
  if (document.getElementById("reviews-carousel")) {
    initReviewsCarousel();
  }
  if (document.getElementById("catalogue-grid")) {
    initCatalogueModule();
  }
  if (document.getElementById("booking-form")) {
    initRegisterFormModule();
  }
  if (document.getElementById("package-detail-wrapper")) {
    initPackageDetailPage();
  }
});

// 3. THEME ENGINE: Light/Dark mode switcher
function initThemeEngine() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const setDark = (isDark) => {
    document.body.classList.toggle("dark-mode", isDark);
    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  setDark(localStorage.getItem("theme") === "dark");
  btn.addEventListener("click", () => setDark(!document.body.classList.contains("dark-mode")));
}

// 4. HTML RENDERER: Standard cards template
function createCardHTML(pkg) {
  return `
    <article class="package-card">
      <a href="${pkg.link}" class="package-image-container" aria-label="View ${pkg.title}">
        <img src="${pkg.image}" alt="${pkg.alt}" class="package-image" loading="lazy" referrerPolicy="no-referrer">
        <span class="package-badge">${pkg.badge}</span>
      </a>
      <div class="package-info">
        <div class="package-meta">
          <span>⏱ ${pkg.duration}</span>
          <span>⭐ ${pkg.rating}</span>
        </div>
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-description">${pkg.description}</p>
        <div class="package-footer">
          <div class="package-price">RM ${pkg.packageOnlyPrice.toLocaleString()}</div>
          <a href="${pkg.link}" class="btn btn-primary" style="padding: 0.35rem 0.8rem; font-size: 0.75rem;">View Deal</a>
        </div>
      </div>
    </article>
  `;
}

// 5. HOMEPAGE TEASER (4 Packages)
function renderHomepageShowcase() {
  const container = document.getElementById("homepage-showcase");
  if (container) {
    container.innerHTML = travelPackages.slice(0, 4).map(createCardHTML).join("");
  }
}

// 6. GUEST REVIEWS INTERACTIVE MODULE
function initReviewModule() {
  const form = document.getElementById("review-form");
  const comment = document.getElementById("review-text");
  const count = document.getElementById("char-count");
  const list = document.getElementById("reviews-list");
  if (!form || !comment || !count || !list) return;

  // Live remaining counter
  comment.addEventListener("input", () => {
    count.textContent = 200 - comment.value.length;
  });

  // Default reviews loaded from LocalStorage if cached
  let reviews = JSON.parse(localStorage.getItem("submitted_reviews")) || [
    { name: "Johnathan Smith", rating: 5, text: "The Egypt tour was absolutely life-changing. Great guides and beautiful cruises!" },
    { name: "Alice Jenkins", rating: 4, text: "Loved Japan! Extremely clean cities and very helpful guides. Highly recommend." }
  ];

  const render = () => {
    list.innerHTML = reviews.map(r => `
      <div class="review-item">
        <div class="review-item-header">
          <span>${r.name}</span>
          <span style="color: #f59e0b;">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        </div>
        <p>${r.text}</p>
      </div>
    `).join("");
  };
  render();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewer-name").value.trim();
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    if (!name || !comment.value.trim() || !ratingInput) return;

    reviews.unshift({ name, rating: parseInt(ratingInput.value), text: comment.value.trim() });
    localStorage.setItem("submitted_reviews", JSON.stringify(reviews));
    render();
    form.reset();
    count.textContent = 200;
  });
}

// 7. CATALOGUE SEARCH, REGIONS FILTER & SORTING
function initCatalogueModule() {
  const grid = document.getElementById("catalogue-grid");
  const search = document.getElementById("catalogue-search");
  const filters = document.getElementById("catalogue-filters");
  const sort = document.getElementById("catalogue-sort");
  if (!grid || !search || !filters || !sort) return;

  let term = "";
  let region = "All";
  let sortBy = "featured";

  // If Home sends a region in the URL, open Catalogue with that filter active.
  const requestedRegion = new URLSearchParams(window.location.search).get("region");
  const validRegions = ["Asia", "Europe", "North America", "South America", "Africa", "Oceania"];
  if (requestedRegion && validRegions.includes(requestedRegion)) {
    region = requestedRegion;
    filters.querySelectorAll(".filter-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.filter === region);
    });
  }

  const render = () => {
    let matches = travelPackages.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(term) || p.country.toLowerCase().includes(term);
      const matchRegion = region === "All" || p.continent === region;
      return matchSearch && matchRegion;
    });

    if (sortBy === "price-asc") matches.sort((a, b) => a.packageOnlyPrice - b.packageOnlyPrice);
    else if (sortBy === "price-desc") matches.sort((a, b) => b.packageOnlyPrice - a.packageOnlyPrice);
    else if (sortBy === "alpha-az") matches.sort((a, b) => a.country.localeCompare(b.country));

    grid.innerHTML = matches.length ? matches.map(createCardHTML).join("") : `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
        <h3>No matches found!</h3>
        <p>Try searching for another destination.</p>
      </div>
    `;
  };

  search.addEventListener("input", (e) => { term = e.target.value.toLowerCase().trim(); render(); });
  filters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      region = e.target.dataset.filter;
      render();
    }
  });
  sort.addEventListener("change", (e) => { sortBy = e.target.value; render(); });

  render();
}

// 8. MULTI-STEP REGISTER FORM WIZARD
function initRegisterFormModule() {
  const form = document.getElementById("booking-form");
  const steps = document.querySelectorAll(".form-step");
  const indicator = document.querySelectorAll(".step-node");
  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");
  const errorBanner = document.getElementById("form-error-banner");
  const errorText = document.getElementById("form-error-text");
  if (!form || !steps.length) return;

  let current = 0;

  // Update the return-flight choices with prices from the selected package.
  const tripSelect = document.getElementById("trip-pref");
  const flightSelect = document.getElementById("return-flight");

  const updateFlightPrices = () => {
    if (!tripSelect || !flightSelect) return;

    const selectedPackage = travelPackages.find(pkg => pkg.id === tripSelect.value);
    const withoutReturn = flightSelect.querySelector('option[value="without-return"]');
    const withReturn = flightSelect.querySelector('option[value="with-return"]');

    if (selectedPackage) {
      withoutReturn.textContent = "Without Return Flight — RM " + selectedPackage.packageOnlyPrice.toLocaleString();
      withReturn.textContent = "With Return Flight — RM " + selectedPackage.flightPrice.toLocaleString();
    } else {
      withoutReturn.textContent = "Without Return Flight";
      withReturn.textContent = "With Return Flight";
    }
  };

  if (tripSelect) {
    tripSelect.addEventListener("change", updateFlightPrices);
  }

  // Auto pre-select preference from URL parameters
  const pref = new URLSearchParams(window.location.search).get("pref");
  if (pref) {
    const select = document.getElementById("trip-pref");
    if (select) {
      select.value = pref;
      updateFlightPrices();
    }
  }

  const showStep = (idx) => {
    steps.forEach((s, i) => s.classList.toggle("active", i === idx));
    indicator.forEach((n, i) => {
      n.classList.toggle("active", i === idx);
      n.classList.toggle("completed", i < idx);
    });
    if (idx === 2) {
      document.getElementById("summary-username").textContent = document.getElementById("username").value;
      document.getElementById("summary-email").textContent = document.getElementById("email").value;
      document.getElementById("summary-address").textContent = document.getElementById("address").value;
      const select = document.getElementById("trip-pref");
      document.getElementById("summary-trip").textContent = select.options[select.selectedIndex].text;
      const flightSelect = document.getElementById("return-flight");
      document.getElementById("summary-flight").textContent = flightSelect.options[flightSelect.selectedIndex].text;

      const selectedPackage = travelPackages.find(pkg => pkg.id === select.value);
      if (selectedPackage) {
        const selectedPrice = flightSelect.value === "with-return"
          ? selectedPackage.flightPrice
          : selectedPackage.packageOnlyPrice;
        document.getElementById("summary-price").textContent = "RM " + selectedPrice.toLocaleString();
      }

      document.getElementById("summary-ref-code").textContent = "TRV-" + Math.floor(100000 + Math.random() * 900000);
    }
  };

  const validate = (idx) => {
    if (idx === 0) {
      const u = document.getElementById("username").value.trim();
      const e = document.getElementById("email").value.trim();
      const p = document.getElementById("password").value.trim();
      if (!u || !e.includes("@") || p.length < 6) {
        errorText.textContent = "Please fill in username, valid email, and password (min 6 chars).";
        errorBanner.style.display = "flex";
        return false;
      }
    } else if (idx === 1) {
      const a = document.getElementById("address").value.trim();
      const t = document.getElementById("trip-pref").value;
      const f = document.getElementById("return-flight").value;
      if (!a || !t || !f) {
        errorText.textContent = "Please provide your mailing address, select a package, and choose a return flight option.";
        errorBanner.style.display = "flex";
        return false;
      }
    }
    errorBanner.style.display = "none";
    return true;
  };

  nextBtns.forEach(btn => btn.addEventListener("click", () => {
    if (validate(current)) showStep(++current);
  }));
  prevBtns.forEach(btn => btn.addEventListener("click", () => {
    errorBanner.style.display = "none";
    showStep(--current);
  }));
}

// 9. DYNAMIC PACKAGE DETAIL TEMPLATE LOADER
function initPackageDetailPage() {
  const wrapper = document.getElementById("package-detail-wrapper");
  if (!wrapper) return;

  // Read the package id from the URL, for example: package.html?id=japan
  const params = new URLSearchParams(window.location.search);
  const packageId = params.get("id");
  const selectedPackage = travelPackages.find(pkg => pkg.id === packageId);

  // Show a clear message when the URL does not contain a valid package id.
  if (!selectedPackage) {
    wrapper.innerHTML = `
      <section class="package-not-found" aria-live="polite">
        <h1>Destination Not Found</h1>
        <p>The travel package you requested is unavailable. Please return to the catalogue and choose another destination.</p>
        <a href="catalogue.html" class="btn btn-primary package-not-found-btn">Back to Packages</a>
      </section>
    `;
    document.title = "Package Not Found - Global Explorers";
    return;
  }

  // Update the page with data from the matching travel package object.
  document.title = `${selectedPackage.title} - Global Explorers`;

  const heroImage = document.getElementById("package-hero-img");
  heroImage.src = selectedPackage.image;
  heroImage.alt = selectedPackage.alt;

  document.getElementById("package-badge").textContent = selectedPackage.badge;
  document.getElementById("package-title").textContent = selectedPackage.title;
  document.getElementById("package-duration").textContent = `⏱ ${selectedPackage.duration}`;
  document.getElementById("package-rating").textContent = `⭐ ${selectedPackage.rating} / 5.0`;
  document.getElementById("package-region").textContent = `📍 ${selectedPackage.country}, ${selectedPackage.continent}`;
  document.getElementById("package-overview-desc").textContent = selectedPackage.description;
  document.getElementById("package-only-price").textContent = `RM ${selectedPackage.packageOnlyPrice.toLocaleString()}`;
  document.getElementById("package-flight-price").textContent = `RM ${selectedPackage.flightPrice.toLocaleString()}`;

  // Build the inclusion list from the package's inclusions array.
  document.getElementById("package-inclusions-list").innerHTML = selectedPackage.inclusions
    .map(inclusion => `<li>${inclusion}</li>`)
    .join("");

  // Build the complete day-by-day itinerary from the itinerary array.
  document.getElementById("package-itinerary-list").innerHTML = selectedPackage.itinerary
    .map(item => `
      <article class="itinerary-item">
        <h3 class="itinerary-day">${item.day}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join("");

  // Carry the selected package id into the registration page.
  document.getElementById("package-reserve-link").href = `register.html?pref=${selectedPackage.id}`;
}

// ══════════════════════════════════════════════════════════════
// 10. HERO SLIDESHOW — Auto-rotating image carousel
// Loads all images from image/ folder. Falls back to Unsplash.
// ══════════════════════════════════════════════════════════════
function initHeroSlideshow() {
  const container = document.getElementById("hero-slideshow");
  const dotsContainer = document.getElementById("slide-dots");
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");
  if (!container || !dotsContainer) return;

  // Use the same local package images as Catalogue and Package Detail.
  const images = [
    "images/packages/japan.jpg",
    "images/packages/france.jpg",
    "images/packages/australia.jpg",
    "images/packages/canada.jpg"
  ];
  let currentSlide = 0;
  let autoplayTimer = null;

  // Build slide elements
  images.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `<img src="${src}" alt="Travel destination ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" referrerPolicy="no-referrer">`;
    // Insert slides BEFORE the overlay (first child)
    container.insertBefore(slide, container.firstChild);

    // Build dots
    const dot = document.createElement("button");
    dot.className = "slide-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const slides = container.querySelectorAll(".slide");
  const dots = dotsContainer.querySelectorAll(".slide-dot");

  function goToSlide(idx) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = (idx + images.length) % images.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    resetAutoplay();
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  // Controls
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  // Start autoplay
  resetAutoplay();
}


// ══════════════════════════════════════════════════════════════
// 11. CUSTOMER REVIEWS CAROUSEL — Auto-rotating testimonials
// ══════════════════════════════════════════════════════════════
function initReviewsCarousel() {
  const wrapper = document.getElementById("reviews-carousel");
  const dotsContainer = document.getElementById("review-carousel-dots");
  if (!wrapper || !dotsContainer) return;

  // Pre-generated customer reviews
  const reviews = [
    {
      name: "Emily Watson",
      trip: "Japan Tour — Nov 2025",
      rating: 5,
      text: "Absolutely magical! The bullet train experience and the golden temples of Kyoto were breathtaking. Our guide was incredibly knowledgeable and kind.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Marcus Chen",
      trip: "France & Riviera — Sep 2025",
      rating: 5,
      text: "Paris at sunset from the Seine cruise was a dream come true. The hotel selections were impeccable, and the TGV ride to Nice was so smooth. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Sofia Rodriguez",
      trip: "Egypt Pyramids — Jan 2026",
      rating: 5,
      text: "Standing before the Great Pyramids was a life-changing moment. The Nile cruise at sunset was pure magic. Our Egyptologist guide made history come alive!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "James Whitfield",
      trip: "Australia Reef — Mar 2026",
      rating: 4,
      text: "Snorkeling the Great Barrier Reef was extraordinary — the coral colors were unreal. Sydney Opera House tour was a bonus highlight. Fantastic trip overall.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Aisha Patel",
      trip: "Italy Escape — Apr 2026",
      rating: 5,
      text: "Venice gondola rides, Roman Colosseum, and the best pasta I have ever tasted. Every detail was perfectly arranged. Global Explorers truly exceeded expectations.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Daniel Okafor",
      trip: "Brazil & Amazon — May 2026",
      rating: 5,
      text: "Rio's energy is contagious! The cable car ride up Sugarloaf was incredible, and the Amazon rainforest trek was the adventure of a lifetime. Simply unforgettable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  ];

  let currentReview = 0;
  let autoTimer = null;

  // Build review slides
  reviews.forEach((r, i) => {
    const slide = document.createElement("div");
    slide.className = "review-slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `
      <div class="review-slide-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p class="review-slide-text">"${r.text}"</p>
      <div class="review-slide-author">
        <img src="${r.avatar}" alt="${r.name}" class="review-slide-avatar" loading="lazy" referrerPolicy="no-referrer">
        <div>
          <div class="review-slide-name">${r.name}</div>
          <div class="review-slide-trip">${r.trip}</div>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);

    // Dot
    const dot = document.createElement("button");
    dot.className = "review-carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Review ${i + 1}`);
    dot.addEventListener("click", () => goToReview(i));
    dotsContainer.appendChild(dot);
  });

  const slides = wrapper.querySelectorAll(".review-slide");
  const dots = dotsContainer.querySelectorAll(".review-carousel-dot");

  function goToReview(idx) {
    slides[currentReview].classList.remove("active");
    dots[currentReview].classList.remove("active");
    currentReview = (idx + reviews.length) % reviews.length;
    slides[currentReview].classList.add("active");
    dots[currentReview].classList.add("active");
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToReview(currentReview + 1), 6000);
  }

  resetAuto();
}

function updateAuthNav() {
  const authContainer = document.getElementById("nav-auth-item");
  if (!authContainer) return;

  if (localStorage.getItem("isLoggedIn") === "true") {
    // Logout SVG Icon (Arrow pointing out of door)
    authContainer.innerHTML = `
      <a href="#" id="logout-btn" class="auth-icon-btn" title="Logout" aria-label="Logout" style="color: #e74c3c
      </a>
    `;
    
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "false");
        alert("You have logged out successfully.");
        window.location.reload();
      });
    }
  } else {
    // Login SVG Icon (Arrow pointing into door)
    authContainer.innerHTML = `
      <a href="login.html" class="auth-icon-btn" title="Login" aria-label="Login">
      </a>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateAuthNav();
});
