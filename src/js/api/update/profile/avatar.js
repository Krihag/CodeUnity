import storage from "../../../utils/storage.js";

export default function avatar(body, response, username) {
  const user = storage.load("profile");
  document.getElementById("sidebar-avatar").src = body.avatar.url;
  document.querySelector("#headerProfile img").src = body.avatar.url;
  document.getElementById("main-profile-avatar").src = body.avatar.url;

  user.avatar.url = body.avatar.url;
  user.banner.url = body.banner.url;

  storage.save("profile", user);
}
