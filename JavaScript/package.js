// PACKAGE DETAIL PAGE
// Uses the shared travelPackages data from app.js.

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
  document.getElementById("package-reserve-link").href = `booking.html?pref=${selectedPackage.id}`;
}

document.addEventListener("DOMContentLoaded", () => {
  initPackageDetailPage();
});
