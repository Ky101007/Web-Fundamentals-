// PROFILE PAGE
// Lets a logged-in traveler edit their account details and manage
// (view / cancel) the bookings they've made. Shared storage helpers
// (getRegisteredUsers, getBookingsForUser, cancelBooking, ...) live in app.js.

function initProfileModule() {
  const guestPanel = document.getElementById("guest-panel");
  const profileContent = document.getElementById("profile-content");
  if (!guestPanel || !profileContent) return;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUser = localStorage.getItem("currentUser");

  if (!isLoggedIn || !currentUser) {
    guestPanel.style.display = "block";
    profileContent.style.display = "none";
    return;
  }

  guestPanel.style.display = "none";
  profileContent.style.display = "block";

  const form = document.getElementById("profile-form");
  const errorBanner = document.getElementById("profile-error-banner");
  const errorText = document.getElementById("profile-error-text");
  const successBanner = document.getElementById("profile-success-banner");

  const nameField = document.getElementById("profile-name");
  const usernameField = document.getElementById("profile-username");
  const emailField = document.getElementById("profile-email");
  const phoneField = document.getElementById("profile-phone");
  const passwordField = document.getElementById("profile-password");
  const confirmField = document.getElementById("profile-confirm");

  const findUserIndex = () => {
    const users = getRegisteredUsers();
    return users.findIndex((u) => u.username.toLowerCase() === currentUser.toLowerCase());
  };

  // Pre-fill the form with whatever we already know about this traveler.
  const loadProfile = () => {
    usernameField.value = currentUser;
    const users = getRegisteredUsers();
    const existing = users.find((u) => u.username.toLowerCase() === currentUser.toLowerCase());
    nameField.value = existing ? existing.name || "" : "";
    emailField.value = existing ? existing.email || "" : "";
    phoneField.value = existing ? existing.phone || "" : "";
  };
  loadProfile();

  const showError = (message) => {
    successBanner.style.display = "none";
    errorText.textContent = message;
    errorBanner.style.display = "flex";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const phone = phoneField.value.trim();
    const newPassword = passwordField.value.trim();
    const confirmPassword = confirmField.value.trim();

    if (!name || !email || !phone) {
      showError("Please fill in your name, email, and phone number.");
      return;
    }
    if (/\d/.test(name)) {
      showError("Full Name cannot contain numbers.");
      return;
    }
    if (!email.includes("@")) {
      showError("Please enter a valid email address.");
      return;
    }
    if (newPassword || confirmPassword) {
      if (newPassword.length < 5) {
        showError("New password must be at least 5 characters.");
        return;
      }
      if (newPassword !== confirmPassword) {
        showError("New passwords do not match.");
        return;
      }
    }

    const users = getRegisteredUsers();
    const idx = findUserIndex();

    if (idx === -1) {
      // No stored record yet (e.g. the built-in demo account) — create one.
      if (!newPassword) {
        showError("Please set a password to save your profile for the first time.");
        return;
      }
      users.push({ name, username: currentUser, email, phone, password: newPassword });
    } else {
      users[idx] = {
        ...users[idx],
        name,
        email,
        phone,
        password: newPassword ? newPassword : users[idx].password
      };
    }

    saveRegisteredUsers(users);
    passwordField.value = "";
    confirmField.value = "";
    errorBanner.style.display = "none";
    successBanner.style.display = "flex";
  });

  // ── MY BOOKINGS ──
  const bookingsList = document.getElementById("bookings-list");

  const renderBookings = () => {
    const bookings = getBookingsForUser(currentUser);

    if (!bookings.length) {
      bookingsList.innerHTML = `
        <div class="empty-state">
          You haven't booked any trips yet.<br>
          <a href="catalogue.html" style="color: var(--accent); font-weight: 600;">Browse packages →</a>
        </div>
      `;
      return;
    }

    bookingsList.innerHTML = bookings.map((b) => {
      const bookedDate = new Date(b.bookedAt);
      const bookedLabel = isNaN(bookedDate) ? "" : bookedDate.toLocaleDateString();
      return `
        <div class="booking-card">
          <div class="booking-card-header">
            <span class="booking-card-title">${b.packageTitle}</span>
            <span class="booking-card-code">${b.refCode}</span>
          </div>
          <div class="booking-card-row"><span>Return Flight</span><span>${b.flightOption}</span></div>
          <div class="booking-card-row"><span>Total Price</span><span>${b.price}</span></div>
          <div class="booking-card-row"><span>Booked On</span><span>${bookedLabel}</span></div>
          <div class="booking-card-footer">
            <button type="button" class="btn btn-danger btn-cancel-booking" data-ref="${b.refCode}">Cancel Booking</button>
          </div>
        </div>
      `;
    }).join("");
  };

  bookingsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-cancel-booking");
    if (!btn) return;
    if (!confirm("Cancel this booking? This cannot be undone.")) return;
    cancelBooking(btn.dataset.ref);
    renderBookings();
  });

  renderBookings();
}

document.addEventListener("DOMContentLoaded", () => {
  initProfileModule();
});
