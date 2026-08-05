// REGISTER (create account) PAGE
// Shared account storage helpers remain in app.js.

function initSignupModule() {
  const signupForm = document.getElementById("signup-form");
  const errorBanner = document.getElementById("signup-error-banner");
  const errorText = document.getElementById("signup-error-text");
  const successPanel = document.getElementById("signup-success-panel");
  if (!signupForm) return;

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value.trim();
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirm = document.getElementById("signup-confirm").value.trim();

    const showError = (message) => {
      errorText.textContent = message;
      errorBanner.style.display = "flex";
    };
    // Clear previous per-field errors
    clearFieldErrors(signupForm);

    // Per-field presence validation
    let hasError = false;
    if (!name) { showFieldError(document.getElementById("signup-name"), "Please fill out this field"); hasError = true; }
    if (!username) { showFieldError(document.getElementById("signup-username"), "Please fill out this field"); hasError = true; }
    if (!email) { showFieldError(document.getElementById("signup-email"), "Please fill out this field"); hasError = true; }
    if (!phone) { showFieldError(document.getElementById("signup-phone"), "Please fill out this field"); hasError = true; }
    if (!password) { showFieldError(document.getElementById("signup-password"), "Please fill out this field"); hasError = true; }
    if (!confirm) { showFieldError(document.getElementById("signup-confirm"), "Please fill out this field"); hasError = true; }
    if (hasError) {
      showError("Please fill in every required field.");
      return;
    }
    if (/\d/.test(name)) {
      showError("Full Name cannot contain numbers.");
      return;
    }
    if (/^\d+$/.test(username)) {
      showError("Username cannot be numbers only.");
      return;
    }
    if (!email.includes("@")) {
      showError("Please enter a valid email address.");
      return;
    }
    // Phone must be digits only
    if (!isPhoneDigitsOnly(phone)) {
      clearFieldErrors(signupForm);
      showFieldError(document.getElementById("signup-phone"), "Phone number can only contain numbers");
      showError("Please correct the fields highlighted below.");
      return;
    }
    if (password.length < 5) {
      showError("Password must be at least 5 characters.");
      return;
    }
    if (password !== confirm) {
      showError("Passwords do not match.");
      return;
    }

    const registeredUsers = getRegisteredUsers();
    const alreadyTaken =
      username.toLowerCase() === "admin" ||
      registeredUsers.some((u) => u.username.toLowerCase() === username.toLowerCase());

    if (alreadyTaken) {
      showError("That username is already taken. Please choose another.");
      return;
    }

    registeredUsers.push({ name, username, email, phone, password });
    saveRegisteredUsers(registeredUsers);

    errorBanner.style.display = "none";
    signupForm.style.display = "none";
    if (successPanel) successPanel.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSignupModule();
});
