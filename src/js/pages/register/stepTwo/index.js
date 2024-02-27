import imagePreview from "../../../utils/helpers/imagePreview.js";

const profileImageInput = document.querySelector("#profileImage");
const profileImagePreview = document.querySelector("#profileImagePreview");
const bannerImageInput = document.querySelector("#bannerImageInput");
const bannerImagePreview = document.querySelector("#bannerImagePreview");
const registerBio = document.querySelector("#registerBio");

imagePreview(profileImageInput, profileImagePreview);
imagePreview(bannerImageInput, bannerImagePreview);