const toggleButton = document.getElementById("toggleButton");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

export default function seePassword() {
  toggleButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      confirmPassword.type = "text";
    } else {
      passwordInput.type = "password";
      confirmPassword.type = "password";
    }
  });
}