import pageSpecific from "./pageSpecific.js";
import endpoints from "../../api/auth/data/endpoints/index.js";

const data = await pageSpecific();

const loadingIndicator = document.querySelector(".loading-indicator");
loadingIndicator.remove();

