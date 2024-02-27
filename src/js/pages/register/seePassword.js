var toggleButton = document.getElementById("toggleButton");
var passwordInput = document.getElementById("password");

export default function seePassword() {
  toggleButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
}

