import formListen from "../../../api/handlers/eventListeners/formListen.js";
import imagePreview from "../../../utils/helpers/imagePreview.js";
import storage from "../../../utils/storage.js";
import requests from "../../../api/auth/requests/index.js";

const profileImageInput = document.querySelector("#profileImage");
const profileImagePreview = document.querySelector("#profileImagePreview");
const bannerImageInput = document.querySelector("#bannerImageInput");
const bannerImagePreview = document.querySelector("#bannerImagePreview");
const registerBio = document.querySelector("#registerBio");
const registerForm = document.querySelector("#registration-form");
const registerBtn = document.querySelector("#register-btn");

console.log(registerBio);

imagePreview(profileImageInput, profileImagePreview);
imagePreview(bannerImageInput, bannerImagePreview);

const registerData = storage.load("register");
console.log(registerData);

async function registerLogin(registerData) {
  storage.remove("register");
  const data = await requests.register(registerData);

  if (data) {
    requests.login(registerData);
  }
}

document.querySelector("#skip").addEventListener("click", async function (e) {
  e.preventDefault();

  registerLogin(registerData);
});

registerForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  profileImageInput.value !== "" &&
    (registerData.avatar = {
      url: profileImageInput.value,
      alt: "profile avatar",
    });

  bannerImageInput.value !== "" &&
    (registerData.banner = {
      url: bannerImageInput.value,
      alt: "profile banner",
    });

  registerBio.value !== "" && (registerData.bio = registerBio.value);

  console.log(registerBio);

  //   storage.remove("register");

  console.log(registerData);
  const data = await requests.register(registerData);

  console.log(data);

  const loginData = await requests.login(registerData);
  console.log(loginData);
});
