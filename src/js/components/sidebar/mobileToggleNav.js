import toggleContainer from "../dropdown/toggleContainer.js";

export default function () {
  const hiddenOptionsBtn = document.getElementById("hamburgerMobile");
  const hiddenOptions = document.getElementById("hamburgerOptions");

  const toggleDropdown = () => {
    if (hiddenOptions.style.display === "none") {
      hiddenOptions.style.display = "block";
    } else {
      hiddenOptions.style.display = "none";
    }
  };

  toggleContainer(hiddenOptionsBtn, hiddenOptions, true);

  const closeIcon = document.getElementById("moreOptionsClose");

  closeIcon.addEventListener("click", toggleDropdown);
  hiddenOptionsBtn.addEventListener("click", toggleDropdown);
}