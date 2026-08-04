// GUEST REVIEWS MODULE
// Used by Home and About Us. Reviews are shared through LocalStorage.

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
    list.innerHTML = reviews.map((r) => `
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

document.addEventListener("DOMContentLoaded", () => {
  initReviewModule();
});
