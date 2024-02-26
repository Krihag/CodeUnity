import followUser from "../../api/handlers/eventListeners/followUser.js";
import storage from "../../utils/storage.js";
import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";

export default async function follow(profile, follow = false, isOwner = false) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "hidden bg-white mt-10 rounded-md mx-auto pl-2 pr-6 sm:px-6 py-8 absolute top-10  shadow-md z-30 text-left follow-container cursor-default overflow-y-auto  max-w-96 sm:w-full sm:max-w-md "
  );

  const heading = document.createElement("h3");
  heading.setAttribute("class", "text-xl font-medium");
  const followText = follow ? "Following" : "Followers";
  heading.textContent = followText;

  container.append(heading);

  const profiles = follow ? profile.following : profile.followers;

  if (!isOwner) {
    const user = storage.load("profile");
    const getRequest = await requests.get();
    const userData = await getRequest.fetch(
      endpoints.profiles.byName(user.name)
    );
    profile = userData.data;
  }

  profiles.forEach((follow, i) => {
    let currentUser = follow.name;
    if (follow.name === profile.name) {
      currentUser = "You";
    }

    const border = i === 0 ? "" : "border-t";

    const followerDiv = document.createElement("div");
    followerDiv.setAttribute(
      "class",
      "flex justify-between py-6  items-center  " + border
    );

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "flex gap-3 sm:gap-5 lg:gap-10");

    const image = document.createElement("img");
    image.setAttribute("src", follow.avatar.url);
    image.setAttribute("alt", follow.avatar.alt);
    image.setAttribute(
      "class",
      "rounded-full h-12 w-12 lg:w-14 lg:h-14 object-cover"
    );

    const span = document.createElement("span");

    const nameHeading = document.createElement("h4");
    nameHeading.setAttribute("class", "lg:text-lg");
    nameHeading.textContent = currentUser;

    const profileLinkHeading = document.createElement("a");
    profileLinkHeading.setAttribute("class", "muted");
    profileLinkHeading.textContent = "View profile";
    profileLinkHeading.setAttribute("href", `/profile/?name=${follow.name}`);

    span.append(nameHeading, profileLinkHeading);
    imageDiv.append(image, span);

    let ifFollowing = "Follow";
    let bgColor = "bg-light border-0";

    profile.following.find((following) => {
      if (following.name === follow.name) {
        ifFollowing = "Unfollow";
        bgColor = "";
      }
    });

    followerDiv.append(imageDiv);

    if (follow.name !== profile.name) {
      const button = document.createElement("button");
      button.setAttribute(
        "class",
        "flex items-center p-2  md:px-6 rounded border border-primary hover:bg-light hover:border-light " +
          bgColor
      );

      button.textContent = ifFollowing;
      followUser(button, follow.name, isOwner);
      followerDiv.append(button);
    }

    container.append(followerDiv);
  });

  return container;
}
