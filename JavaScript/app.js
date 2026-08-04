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

// Clear authentication control shown on every page.
function updateAuthNav() {
  const authBtn = document.getElementById("auth-link-btn");
  const profileBtn = document.getElementById("profile-nav-btn");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (profileBtn) profileBtn.style.display = isLoggedIn ? "flex" : "none";

  if (!authBtn) return;

  if (isLoggedIn) {
    authBtn.href = "#";
    authBtn.title = "Log Out";
    authBtn.setAttribute("aria-label", "Log Out");
    authBtn.classList.add("logout-state");
    authBtn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zm3-10H9c-1.1 0-2 .9-2 2v4h2V5h10v14H9v-4H7v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      </svg>
      <span>Log Out</span>
    `;

    authBtn.onclick = function (event) {
      event.preventDefault();
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    };
  } else {
    authBtn.href = "login.html";
    authBtn.title = "Login";
    authBtn.setAttribute("aria-label", "Login");
    authBtn.classList.remove("logout-state");
    authBtn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      </svg>
      <span>Login</span>
    `;
    authBtn.onclick = null;
  }
}

document.addEventListener("DOMContentLoaded", updateAuthNav);

// ==========================================================================
// 7. ACCOUNT STORAGE HELPERS (shared by Login & Signup)
// Accounts are kept in LocalStorage (not cookies), so they survive the
// browser being closed and the HTML page being reopened later.
// ==========================================================================
function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem("registered_users")) || [];
}

function saveRegisteredUsers(users) {
  localStorage.setItem("registered_users", JSON.stringify(users));
}

// ==========================================================================
// 8. BOOKING STORAGE HELPERS (shared by Book Now & Profile)
// Reservations are kept in LocalStorage, tagged with the traveler's
// username so each account can look up its own bookings later.
// ==========================================================================
function getAllBookings() {
  return JSON.parse(localStorage.getItem("user_bookings")) || [];
}

function saveAllBookings(bookings) {
  localStorage.setItem("user_bookings", JSON.stringify(bookings));
}

function getBookingsForUser(username) {
  if (!username) return [];
  return getAllBookings().filter(
    (b) => b.username.toLowerCase() === username.toLowerCase()
  );
}

function addBooking(booking) {
  const bookings = getAllBookings();
  bookings.unshift(booking);
  saveAllBookings(bookings);
}

function cancelBooking(refCode) {
  const bookings = getAllBookings().filter((b) => b.refCode !== refCode);
  saveAllBookings(bookings);
}



