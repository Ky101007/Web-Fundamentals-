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
    title: "Scenic Wonders of Japan",
    country: "Japan",
    continent: "Asia",
    price: 1499,
    duration: "7 Days",
    rating: "4.9",
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop",
    description: "timeless heritage and futuristic innovation in Tokyo, Kyoto, and Mt. Fuji.",
    link: "package.html?id=japan",
    inclusions: ["Round-trip flight", "4-star hotels", "Bullet train pass", "Local tour guide"],
    itinerary: [
      { day: "Day 1: Tokyo Arrival", text: "Land in Tokyo, explore neon streets and taste local food." },
      { day: "Day 2: Mount Fuji & Kyoto", text: "Bullet train to Kyoto, visit ancient golden temples and see Mt. Fuji." }
    ]
  },
  {
    id: "france",
    title: "Romantic Paris & Riviera",
    country: "France",
    continent: "Europe",
    price: 1899,
    duration: "8 Days",
    rating: "4.8",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
    description: "Savor gourmet cuisine, walk down the Champs-Élysées, and bask in the gorgeous sun.",
    link: "package.html?id=france",
    inclusions: ["International flights", "Historic hotels", "Seine river cruise", "TGV train pass"],
    itinerary: [
      { day: "Day 1: Paris Lights", text: "Eiffel tower sunset walk and beautiful Seine dinner cruise." },
      { day: "Day 2: Riviera Sun", text: "Ride TGV fast train to Nice and relax on the beach." }
    ]
  },
  {
    id: "italy",
    title: "Classic Italian Escape",
    country: "Italy",
    continent: "Europe",
    price: 1650,
    duration: "9 Days",
    rating: "4.9",
    badge: "Cultural Tour",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
    description: "Dive into historic Rome, ride romantic gondolas in Venice, and admire amazing art.",
    link: "package.html?id=italy",
    inclusions: ["Round-trip flights", "Handpicked boutique lodging", "Gondola ride in Venice", "Colosseum fast-pass"],
    itinerary: [
      { day: "Day 1: Roman Empire", text: "Walk through the Colosseum, Roman Forum, and eat fresh pasta." },
      { day: "Day 2: Venetian Canals", text: "Ride classic gondolas on romantic waterways." }
    ]
  },
  {
    id: "egypt",
    title: "Ancient Pyramids Tour",
    country: "Egypt",
    continent: "Africa",
    price: 1199,
    duration: "6 Days",
    rating: "4.7",
    badge: "Adventure",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop",
    description: "Unravel mysteries of the Great Pyramids of Giza, explore Sphinx structures.",
    link: "package.html?id=egypt",
    inclusions: ["Cairo regional flight", "Nile River views hotel", "Great Pyramids tour", "Professional Egyptologist"],
    itinerary: [
      { day: "Day 1: Cairo Legends", text: "Visit Giza Pyramids and stand next to the grand Sphinx." },
      { day: "Day 2: Nile River Cruise", text: "Sail downstream on a traditional sailboat." }
    ]
  },
  {
    id: "australia",
    title: "Great Reef & Sydney Highlights",
    country: "Australia",
    continent: "Oceania",
    price: 2199,
    duration: "10 Days",
    rating: "4.8",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop",
    description: "See the spectacular Sydney Opera House, explore clean beaches, and snorkel inside the reef.",
    link: "package.html?id=australia",
    inclusions: ["International flights", "Sydney Opera House ticket", "Barrier Reef boat ride", "Snorkeling gear"],
    itinerary: [
      { day: "Day 1: Sydney Harbour", text: "Guided tour inside Opera house and walking on sandy beaches." },
      { day: "Day 2: Reef Exploration", text: "Catamaran boat cruise to snorkel over bright coral reefs." }
    ]
  },
  {
    id: "brazil",
    title: "Vibrant Rio & Rainforest",
    country: "Brazil",
    continent: "South America",
    price: 1350,
    duration: "7 Days",
    rating: "4.6",
    badge: "Tropical",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop",
    description: "Breathe in Rio's energy, stand under Christ the Redeemer, and explore the Amazon.",
    link: "package.html?id=brazil",
    inclusions: ["Round-trip flights", "Beachfront hotel stay", "Sugarloaf mountain ride", "Samba dance class"],
    itinerary: [
      { day: "Day 1: Copacabana Sun", text: "Check in facing beach and ride a cable car up Sugarloaf." },
      { day: "Day 2: Giant Forest", text: "Train ride to Christ statue and hike Tijuca waterfall canopy." }
    ]
  },
  {
    id: "usa",
    title: "New York & Grand Canyon",
    country: "USA",
    continent: "North America",
    price: 1799,
    duration: "8 Days",
    rating: "4.7",
    badge: "City & Nature",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop",
    description: "Experience the blinding lights of NYC Times Square before marveling at the vast Grand Canyon.",
    link: "package.html?id=usa",
    inclusions: ["Domestic return flights", "Empire State deck access", "Grand Canyon park permit", "Shuttle services"],
    itinerary: [
      { day: "Day 1: NYC Neon Lights", text: "Walk around Times Square and ascend to the top observatory deck." },
      { day: "Day 2: Canyon South Rim", text: "Fly to Arizona and take a scenic canyon trail walk." }
    ]
  },
  {
    id: "canada",
    title: "Majestic Rockies & Lakes",
    country: "Canada",
    continent: "North America",
    price: 1590,
    duration: "8 Days",
    rating: "4.9",
    badge: "Nature Escape",
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=600&auto=format&fit=crop",
    description: "Stare in awe at the turquoise water of Lake Louise and venture deep into alpine mountain valleys.",
    link: "package.html?id=canada",
    inclusions: ["Calgary flights", "Cozy alpine forest cabin", "Lake Louise canoe rental", "Ice explorer tour"],
    itinerary: [
      { day: "Day 1: Banff Mountain Town", text: "Unpack in cozy logs and ride the high alpine gondola." },
      { day: "Day 2: Turquoise Waters", text: "Paddle on beautiful turquoise Lake Louise and hike to tea house." }
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
      <div class="package-image-container">
        <img src="${pkg.image}" alt="${pkg.title}" class="package-image" loading="lazy" referrerPolicy="no-referrer">
        <span class="package-badge">${pkg.badge}</span>
      </div>
      <div class="package-info">
        <div class="package-meta">
          <span>⏱ ${pkg.duration}</span>
          <span>⭐ ${pkg.rating}</span>
        </div>
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-description">${pkg.description}</p>
        <div class="package-footer">
          <div class="package-price">$${pkg.price}</div>
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

  const render = () => {
    let matches = travelPackages.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(term) || p.country.toLowerCase().includes(term);
      const matchRegion = region === "All" || p.continent === region;
      return matchSearch && matchRegion;
    });

    if (sortBy === "price-asc") matches.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") matches.sort((a, b) => b.price - a.price);
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

  // Auto pre-select preference from URL parameters
  const pref = new URLSearchParams(window.location.search).get("pref");
  if (pref) {
    const select = document.getElementById("trip-pref");
    if (select) select.value = pref;
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
      if (!a || !t) {
        errorText.textContent = "Please provide your mailing address and select a package.";
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
  const pkgId = new URLSearchParams(window.location.search).get("id");
  const pkg = travelPackages.find(p => p.id === pkgId);
  const wrapper = document.getElementById("package-detail-wrapper");
  if (!wrapper) return;

  if (!pkg) {
    wrapper.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem;">
        <h2>Destination Not Found</h2>
        <p>Could not load details for this trip. Please go back.</p>
        <a href="catalogue.html" class="btn btn-primary" style="margin-top: 1rem;">Back to Catalogue</a>
      </div>
    `;
    return;
  }

  document.getElementById("package-hero-img").src = pkg.image;
  document.getElementById("package-badge").textContent = pkg.badge;
  document.getElementById("package-title").textContent = pkg.title;
  document.getElementById("package-duration").textContent = `⏱ Duration: ${pkg.duration}`;
  document.getElementById("package-rating").textContent = `⭐ Rating: ${pkg.rating} / 5.0`;
  document.getElementById("package-region").textContent = `📍 Region: ${pkg.continent}`;
  document.getElementById("package-overview-desc").textContent = `${pkg.description} Explore high-quality dining, cozy hotels, and amazing adventures curated carefully for you.`;
  document.getElementById("package-sidebar-price").textContent = `$${pkg.price}`;

  document.getElementById("package-inclusions-list").innerHTML = pkg.inclusions.map(i => `<li>${i}</li>`).join("");
  document.getElementById("package-itinerary-list").innerHTML = pkg.itinerary.map(item => `
    <div class="itinerary-item">
      <div class="itinerary-day">${item.day}</div>
      <p>${item.text}</p>
    </div>
  `).join("");

  document.getElementById("package-reserve-link").href = `register.html?pref=${pkg.id}`;
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

  // ── Image sources: list your image/ folder files here ──
  // When you add images to the image/ folder, add their filenames below.
  // Example: "image/japan.jpg", "image/paris.jpg", etc.
  const localImages = [];
  // To populate automatically, add filenames like:
  // const localImages = ["image/slide1.jpg", "image/slide2.jpg", "image/slide3.jpg"];

  // Fallback Unsplash images (used when image/ folder is empty)
  const fallbackImages = [
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1400&auto=format&fit=crop",  // Japan
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",  // Paris
    "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1400&auto=format&fit=crop",  // Egypt
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1400&auto=format&fit=crop",  // Australia
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1400&auto=format&fit=crop",  // Brazil
    "https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1400&auto=format&fit=crop"   // Canada
  ];

  const images = localImages.length > 0 ? localImages : fallbackImages;
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
