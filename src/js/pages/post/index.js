import pageSpecific from "./pageSpecific.js";

const loadingIndicator = document.querySelector(".loading-indicator");
loadingIndicator.remove();

await pageSpecific();
