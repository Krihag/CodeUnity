import dropdown from "../dropdown/index.js";

export default function profileMedia(profile, isOwner) {
  const container = document.createElement("div");
  container.classList.add("relative", "flex", "items-center", "flex-col");

  const profileImage = document.createElement("img");
  profileImage.src = profile.avatar.url;
  profileImage.alt = profile.avatar.alt;
  profileImage.classList.add(
    "rounded-full",
    "relative",
    "border",
    "top-9",
    "sm:top-10",
    "2xl:top-16",
    "object-cover",
    "max-w-56",
    "max-h-56",
    "sm:max-w-72",
    "sm:max-h-72",
    "lg:max-w-96",
    "lg:max-h-96"
  );
  profileImage.setAttribute("id", "main-profile-avatar");

  container.append(profileImage);
  return container;
}
