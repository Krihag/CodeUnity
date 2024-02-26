import toggleContainer from "../dropdown/toggleContainer.js";

export default function () {
  const hiddenOptions = document.getElementById("hamburgerOptions");
  const hiddenOptionsBtn = document.getElementById("hamburgerMobile");

  toggleContainer(hiddenOptionsBtn, hiddenOptions, true);
}
