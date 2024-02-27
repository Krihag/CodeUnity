import EventListener from "./index.js";
import putRequest from "../../auth/requests/putRequest.js";

export default function followUser(element, name, isOwner = false) {
  const type = "click";

  async function callBackListen(e) {
    e.preventDefault();
    const buttonText = e.target.firstChild.nodeValue;

    const endpoint = `/social/profiles/${name}/${buttonText.toLowerCase()}`;
    const request = await putRequest(endpoint);
    if (request.data) {
      e.target.textContent = buttonText === "Follow" ? "Unfollow" : "Follow";

      element.classList.toggle("bg-light");
      element.classList.toggle("border-0");
      console.log(request.data);
      console.log(name);

      if (isOwner) {
        const followers = document.getElementById("following-count");
        buttonText === "Follow"
          ? followers.textContent++
          : followers.textContent--;
      } else {
        const following = document.getElementById("followers-count");
        buttonText === "Follow"
          ? following.textContent++
          : following.textContent--;
      }
    }
  }

  const followUser = new EventListener(element, type, callBackListen);
  followUser.add();
}
