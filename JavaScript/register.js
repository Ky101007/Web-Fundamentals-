// REGISTER / BOOKING PAGE
// Uses shared travel package data from app.js.

function initRegisterFormModule() {
  const form = document.getElementById("booking-form");
  const steps = document.querySelectorAll(".form-step");
  const indicator = document.querySelectorAll(".step-node");
  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");
  const errorBanner = document.getElementById("form-error-banner");
  const errorText = document.getElementById("form-error-text");
  if (!form || !steps.length) return;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  let current = isLoggedIn ? 1 : 0;

  // Logged-in visitors have already authenticated, so start at booking details.
  if (isLoggedIn) {
    const usernameField = document.getElementById("username");
    const currentUser = localStorage.getItem("currentUser");
    if (usernameField && currentUser) usernameField.value = currentUser;
    showInitialLoggedInStep();
  }

  function showInitialLoggedInStep() {
    steps.forEach((s, i) => s.classList.toggle("active", i === current));
    indicator.forEach((n, i) => {
      n.classList.toggle("active", i === current);
      n.classList.toggle("completed", i < current);
    });
  }

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
      document.getElementById("summary-address").textContent = document.getElementById("tel").value;
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
      const tel = document.getElementById("tel").value.trim();
      const t = document.getElementById("trip-pref").value;
      const f = document.getElementById("return-flight").value;
      if (!tel || !t || !f) {
        errorText.textContent = "Please provide your phone number, select a package, and choose a return flight option.";
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

document.addEventListener("DOMContentLoaded", () => {
  initRegisterFormModule();
});
