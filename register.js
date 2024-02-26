const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const passwordRequirements = document.querySelector("#passwordRequirements");
const passwordLength = document.querySelector("#passwordLengthIcon");
const passwordFormat = document.querySelector("#passwordFormatIcon");
const incorrectPassword = document.querySelector("#incorrectPassword");
const passwordSymbol = document.querySelector("#passwordSymbol");
const emailAddress = document.getElementById("email");
const validEmail = document.getElementById("validEmail");

validEmail.classList.add("hidden");

emailAddress.addEventListener("input", function () {
  const email = emailAddress.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@(stud\.)?noroff\.no$/;

  if (emailPattern.test(email)) {
    validEmail.classList.add("hidden");
  } else {
    validEmail.classList.remove("hidden");
  }

  if (email === "") {
    setTimeout(function () {
      validEmail.classList.add("hidden");
    }, 500);
  }
});

passwordInput.addEventListener("focus", function () {
  passwordRequirements.style.display = "flex";
});

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const hasValidLength = password.length >= 8;
  const hasValidFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  passwordLength.style.backgroundColor = hasValidLength ? "#34D399" : "#EF4444";
  passwordFormat.style.backgroundColor = hasValidFormat ? "#34D399" : "#EF4444";
  passwordSymbol.style.backgroundColor = hasSpecialCharacter
    ? "#34D399"
    : "#EF4444";
});

confirmPasswordInput.addEventListener("input", function () {
  const confirmPassword = this.value;
  const password = passwordInput.value;

  if (password === "" || confirmPassword === "") {
    incorrectPassword.classList.add("hidden");
  } else {
    password !== confirmPassword
      ? incorrectPassword.classList.remove("hidden")
      : incorrectPassword.classList.add("hidden");
  }
});

confirmPasswordInput.addEventListener("blur", function () {
  const password = passwordInput.value;
  const confirmPassword = this.value;

  if (password === "" && confirmPassword === "") {
    setTimeout(function () {
      incorrectPassword.classList.add("hidden");
    }, 500);
  }
});
