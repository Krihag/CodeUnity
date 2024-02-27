import pageSpecific from "./pageSpecific.js";
import explore from "./explore.js";

await pageSpecific();
console.log("test");
window.onload = function () {
  console.log("test");
};

explore();