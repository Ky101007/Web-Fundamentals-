// LOGIN PAGE
// Shared account storage and navigation helpers remain in app.js.

function initLoginModule() {
  const loginForm = document.getElementById("login-form");
  const errorBanner = document.getElementById("login-error-banner");
  const errorText = document.getElementById("login-error-text");
  const successPanel = document.getElementById("login-success-panel");
  const panelLogoutBtn = document.getElementById("panel-logout-btn");
  if (!loginForm) return;

  // Sync state on page load
  if (localStorage.getItem("isLoggedIn") === "true") {
    loginForm.style.display = "none";
    if (successPanel) successPanel.style.display = "block";
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("login-username").value.trim();
    const passwordInput = document.getElementById("login-password").value.trim();

    // Built-in demo account, plus any account created on the Register page.
    const registeredUsers = getRegisteredUsers();
    const matchedUser = registeredUsers.find(
      (u) => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput
    );
    const isDemoAccount = usernameInput === "admin" && passwordInput === "12345";

    if (isDemoAccount || matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", usernameInput);
      errorBanner.style.display = "none";
      loginForm.style.display = "none";
      if (successPanel) successPanel.style.display = "block";
      if (typeof updateAuthNav === "function") updateAuthNav();
    } else {
      errorText.textContent = "Invalid username or password. Please try again.";
      errorBanner.style.display = "flex";
    }
  });

  if (panelLogoutBtn) {
    panelLogoutBtn.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("currentUser");
      alert("Logged out successfully.");
      window.location.reload();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLoginModule();
});
