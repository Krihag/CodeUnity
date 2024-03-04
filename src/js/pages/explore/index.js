import explore from "./explore.js";
import pageSpefific from "./pageSpecific.js";

const loadingIndicator = document.querySelectorAll(".loading-indicator");
loadingIndicator.forEach(indicator => {
    indicator.remove();
});

await pageSpefific();
explore();
