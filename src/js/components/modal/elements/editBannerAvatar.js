export default function editBannerAvatar(ele) {
  const container = document.createElement("div");
  console.log(ele);
  const bannerContainer = document.createElement("div");
  bannerContainer.setAttribute(
    "class",
    "banner relative flex flex-col items-center"
  );

  const bannerImage = document.createElement("img");
  bannerImage.setAttribute("src", ele.banner.url);
  bannerImage.setAttribute("alt", ele.banner.alt);
  bannerImage.setAttribute("class", "h-52 w-full object-cover");

  const profileImage = document.createElement("img");
  profileImage.setAttribute("src", ele.avatar.url);
  profileImage.setAttribute("alt", ele.avatar.alt);
  profileImage.setAttribute(
    "class",
    "absolute top-10 rounded-full h-52 max-w-52 object-cover border-2"
  );

  bannerContainer.append(bannerImage, profileImage);

  const profileImageLabel = document.createElement("label");
  profileImageLabel.setAttribute("for", "profileImage");
  profileImageLabel.setAttribute("class", "lg:text-lg flex mt-12 md:mt-8 ");
  profileImageLabel.textContent = "Profile image";

  const profileImageInput = document.createElement("input");
  profileImageInput.setAttribute("type", "url");
  profileImageInput.setAttribute("id", "profileImage");
  profileImageInput.setAttribute(
    "class",
    "w-full border h-10 2xl:h-14 rounded mb-4 mt-2 outline-none pl-3 text-sm md:text-base"
  );
  profileImageInput.name = "avatar";

  profileImageInput.setAttribute(
    "placeholder",
    "Their current URL to the profile image."
  );

  profileImageInput.value = ele.avatar.url;

  const defaultProfileImageContainer = document.createElement("div");
  defaultProfileImageContainer.setAttribute(
    "class",
    "flex gap-x-3 mb-5 items-center"
  );

  const imageCaptionLabel = document.createElement("label");
  imageCaptionLabel.setAttribute("for", "imageCaption");
  imageCaptionLabel.setAttribute("class", "lg:text-lg");
  imageCaptionLabel.textContent = "Profile image caption";

  const imageCaptionInput = document.createElement("input");
  imageCaptionInput.setAttribute("type", "text");
  imageCaptionInput.setAttribute("id", "imageCaption");
  imageCaptionInput.setAttribute(
    "class",
    "w-full border h-10 2xl:h-14 rounded mb-4 mt-2 outline-none pl-3 text-sm md:text-base"
  );

  imageCaptionLabel.value = ele.avatar.alt ? ele.avatar.alt : "";

  const bannerImageLabel = document.createElement("label");
  bannerImageLabel.setAttribute("for", "bannerImage");
  bannerImageLabel.setAttribute("class", "lg:text-lg");
  bannerImageLabel.textContent = "Banner image";

  const bannerImageInput = document.createElement("input");
  bannerImageInput.setAttribute("type", "url");
  bannerImageInput.setAttribute("id", "bannerImage");
  bannerImageInput.setAttribute(
    "class",
    "w-full border h-10 2xl:h-14 rounded mb-4 mt-2 outline-none pl-3 text-sm md:text-base"
  );
  bannerImageInput.setAttribute(
    "placeholder",
    "The current URL to the banner image."
  );
  bannerImageInput.name = "banner";

  bannerImageInput.value = ele.banner.url;

  container.append(
    bannerContainer,
    profileImageLabel,
    profileImageInput,

    imageCaptionLabel,
    imageCaptionInput,
    bannerImageLabel,
    bannerImageInput
  );
  console.log("test");
  return container;
}
