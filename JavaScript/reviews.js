// GUEST REVIEWS MODULE
// Used by Home and About Us. Reviews are shared through LocalStorage.

function initReviewModule() {
  const form = document.getElementById("review-form");
  const nameField = document.getElementById("reviewer-name");
  const comment = document.getElementById("review-text");
  const count = document.getElementById("char-count");
  const list = document.getElementById("reviews-list");
  const errorBanner = document.getElementById("review-error-banner");
  const errorText = document.getElementById("review-error-text");
  if (!form || !nameField || !comment || !count || !list || !errorBanner || !errorText) return;

  form.noValidate = true;

  const showError = (message) => {
    errorText.textContent = message;
    errorBanner.style.display = "block";
  };

  const hideError = () => {
    errorBanner.style.display = "none";
  };

  const getWordCount = (text) => text.trim() ? text.trim().split(/\s+/).length : 0;

  const updateWordCounter = () => {
    const wordsUsed = getWordCount(comment.value);
    count.textContent = Math.max(0, 250 - wordsUsed);
    return wordsUsed;
  };

  // Live remaining word counter
  comment.addEventListener("input", () => {
    const wordsUsed = updateWordCounter();
    if (wordsUsed > 250) {
      showError("Word Limit reached.");
      return;
    }
    hideError();
  });
  nameField.addEventListener("input", hideError);
  form.querySelectorAll('input[name="rating"]').forEach((input) => {
    input.addEventListener("change", hideError);
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
    const name = nameField.value.trim();
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const wordsUsed = getWordCount(comment.value);

    if (wordsUsed > 250) {
      showError("Word Limit reached.");
      return;
    }
    if (!name || !comment.value.trim()) {
      showError("Please fill in your full name and review comments.");
      return;
    }
    if (!ratingInput) {
      showError("Please select star rating.");
      return;
    }

    hideError();
    reviews.unshift({ name, rating: parseInt(ratingInput.value), text: comment.value.trim() });
    localStorage.setItem("submitted_reviews", JSON.stringify(reviews));
    render();
    form.reset();
    count.textContent = 250;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initReviewModule();
});
