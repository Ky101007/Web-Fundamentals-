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
    const currentUser = localStorage.getItem("currentUser");
    const savedUser = getRegisteredUsers().find(
      (u) => u.username.toLowerCase() === (currentUser || "").toLowerCase()
    );

    const nameField = document.getElementById("signup-name");
    const usernameField = document.getElementById("signup-username");
    const emailField = document.getElementById("signup-email");
    const phoneField = document.getElementById("signup-phone");

    if (usernameField && currentUser) usernameField.value = currentUser;
    if (savedUser) {
      if (nameField) nameField.value = savedUser.name || "";
      if (emailField) emailField.value = savedUser.email || "";
      if (phoneField) phoneField.value = savedUser.phone || "";
    }
    showInitialLoggedInStep();

    // There's no profile step to go back to once already logged in.
    prevBtns.forEach(btn => {
      btn.style.display = "none";
      if (btn.parentElement) btn.parentElement.style.justifyContent = "flex-end";
    });
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
      document.getElementById("summary-username").textContent = document.getElementById("signup-name").value;
      document.getElementById("summary-email").textContent = document.getElementById("signup-email").value;
      document.getElementById("summary-address").textContent = document.getElementById("signup-phone").value;
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

      // Save this reservation so it shows up under My Bookings on the Profile page.
      const refCode = document.getElementById("summary-ref-code").textContent;
      const username = document.getElementById("signup-username").value.trim();
      if (username) {
        addBooking({
          username,
          refCode,
          packageId: select.value,
          packageTitle: select.options[select.selectedIndex].text,
          flightOption: flightSelect.options[flightSelect.selectedIndex].text,
          price: document.getElementById("summary-price").textContent,
          bookedAt: new Date().toISOString()
        });
      }
    }
  };

  const validate = (idx) => {
    if (idx === 0) {
      const name = document.getElementById("signup-name").value.trim();
      const u = document.getElementById("signup-username").value.trim();
      const e = document.getElementById("signup-email").value.trim();
      const phone = document.getElementById("signup-phone").value.trim();
      const p = document.getElementById("signup-password").value.trim();
      const confirm = document.getElementById("signup-confirm").value.trim();

      if (!name || !u || !e || !phone || !p || !confirm) {
        errorText.textContent = "Please fill in every field.";
        errorBanner.style.display = "flex";
        return false;
      }
      if (/\d/.test(name)) {
        errorText.textContent = "Full Name cannot contain numbers.";
        errorBanner.style.display = "flex";
        return false;
      }
      if (/^\d+$/.test(u)) {
        errorText.textContent = "Username cannot be numbers only.";
        errorBanner.style.display = "flex";
        return false;
      }
      if (!e.includes("@")) {
        errorText.textContent = "Please enter a valid email address.";
        errorBanner.style.display = "flex";
        return false;
      }
      if (p.length < 5) {
        errorText.textContent = "Password must be at least 5 characters.";
        errorBanner.style.display = "flex";
        return false;
      }
      if (p !== confirm) {
        errorText.textContent = "Passwords do not match.";
        errorBanner.style.display = "flex";
        return false;
      }
    } else if (idx === 1) {
      const t = document.getElementById("trip-pref").value;
      const f = document.getElementById("return-flight").value;
      if (!t || !f) {
        errorText.textContent = "Please select a package and choose a return flight option.";
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
