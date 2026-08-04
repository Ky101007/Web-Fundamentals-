// HOME PAGE
// Homepage-only JavaScript. Shared Review functionality remains in app.js.

function renderHomepageShowcase() {
  const container = document.getElementById("homepage-showcase");
  if (container) {
    container.innerHTML = travelPackages.slice(0, 4).map(createCardHTML).join("");
  }
}

function initHeroSlideshow() {
  const container = document.getElementById("hero-slideshow");
  const dotsContainer = document.getElementById("slide-dots");
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");
  if (!container || !dotsContainer) return;

  const images = [
    "images/packages/japan.jpg",
    "images/packages/france.jpg",
    "images/packages/italy.jpg",
    "images/packages/egypt.jpg",
    "images/packages/australia.jpg",
    "images/packages/usa.jpg",
    "images/packages/canada.jpg",
    "images/packages/brazil.jpg"
  ];

  let currentSlide = 0;
  let autoplayTimer = null;
  const slideFragment = document.createDocumentFragment();

  // Build slides in the same order as the images array.
  images.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `<img src="${src}" alt="Travel destination ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" referrerPolicy="no-referrer">`;
    slideFragment.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "slide-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  // Keep all slides together and preserve their original array order.
  container.insertBefore(slideFragment, container.firstChild);

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

  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  resetAutoplay();
}

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

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("homepage-showcase")) {
    renderHomepageShowcase();
  }
  if (document.getElementById("hero-slideshow")) {
    initHeroSlideshow();
  }
  if (document.getElementById("reviews-carousel")) {
    initReviewsCarousel();
  }
});
