import storage from "../../utils/storage.js";
import sidebarDetails from "../../components/sidebar/index.js";
import getAllPosts from "../../api/auth/requests/getAllPosts.js";
import mobileToggleNav from "../../components/sidebar/mobileToggleNav.js";
import expandSidebar from "../../utils/helpers/expandSidebar.js";
import createNewPost from "../../components/modal/specificModals/createNewPost.js";
import searchbar from "../../utils/helpers/searchbar.js";

const headerProfile = document.querySelector("#headerProfile");
const logoutBtns = document.querySelectorAll(".logout-btn");

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const searchContainer = document.querySelector("#search-container");

export default {
  enterPage() {
    const profile = storage.load("profile");
    const token = storage.load("token");
    if (!profile || !token) {
      window.location.href = "/";
    }

    sidebarDetails(profile);
    headerProfile.href = `/profile/?name=${profile.name}`;

    const headerProfileImage = document.createElement("img");
    headerProfileImage.classList.add(
      "rounded-full",
      "w-12",
      "h-12",
      "md:w-14",
      "md:h-14",
      "lg:w-16",
      "lg:h-16",
      "object-cover",
      "border"
    );
    headerProfileImage.src = profile.avatar.url;
    headerProfileImage.alt = "Your profile image";

    headerProfile.append(headerProfileImage);

    searchbar();

    searchButton.addEventListener("click", function () {
      searchContainer.classList.toggle("w-96");
      searchContainer.classList.toggle("h-16");

      searchInput.classList.toggle("hidden");
      searchInput.classList.toggle("flex");
      searchInput.focus();
      searchContainer.classList.toggle("absolute");
      searchContainer.classList.toggle("right-0");
      searchContainer.classList.toggle("top-10");
      document
        .getElementById("search-result-container")
        .classList.add("hidden");
    });

    document
      .querySelector("#create-post-mobile")
      .addEventListener("click", createNewPost);

    mobileToggleNav();

    logoutBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        storage.clear();
        window.location.href = "/";
        console.log("test");
      });
    });
    expandSidebar();

    return { profile, token };
  },

  leavePage() {},
};
