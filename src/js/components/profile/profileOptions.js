import followUser from "../../api/handlers/eventListeners/followUser.js";
import createPost from "../modal/specificModals/createNewPost.js";
import editProfile from "../../components/modal/specificModals/editProfile.js";

export default function profileOptions(profile, isOwner, user) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex justify-start md:justify-end gap-x-4")

  if (isOwner) {
    const editProfileBtn = document.createElement("button");
    editProfileBtn.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "py-3",
      "px-6",
      "lg:px-8",
      "lg:py-4",
      "rounded",
      "border",
      "border-primary",
      "hover:bg-light",
      "hover:border-light",
      "text-sm",
      "sm:text-base"
    );
    editProfileBtn.textContent = "Edit profile";

    console.log(profile);

    console.log(profile.avatar);

    editProfileBtn.addEventListener("click", function (e) {
      e.preventDefault();
      editProfile(profile);
    });

    const newPost = document.createElement("button");
    newPost.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "text-white",
      "bg-secondary",
      "py-3",
      "px-6",
      "lg:py-4",
      "lg:px-8",
      "rounded",
      "hover:bg-light",
      "hover:text-primary",
      "text-sm",
      "sm:text-base"
    );
    newPost.textContent = "New post";
    newPost.addEventListener("click", createPost);

    container.append(editProfileBtn, newPost);
  } else {
    const followButton = document.createElement("button");

    let ifFollowing = profile.followers.find(({ name }) => name === user)
      ? "Unfollow"
      : "Follow";

    followButton.textContent = ifFollowing;
    followButton.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-3",
      "text-white",
      `bg-secondary`,
      "py-4",
      "px-6",
      "rounded",
      "hover:bg-light",
      "hover:text-primary",
      "duration-500",
      "w-32"
    );

    const messageButton = document.createElement("button");
    messageButton.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "py-4",
      "px-6",
      "rounded",
      "border",
      "border-primary",
      "hover:bg-light",
      "hover:border-light"
    );
    messageButton.textContent = "Message";

    container.append(followButton, messageButton);

    followUser(followButton, profile.name);
  }
  return container;
}
