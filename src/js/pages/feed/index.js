import pageSpecific from "./pageSpecific.js";

const loadingIndicator = document.querySelectorAll(".loading-indicator");
loadingIndicator.forEach((indicator) => {
  indicator.remove();
});

await pageSpecific();
