import modal from "../index.js";
import listener from "../../../api/handlers/eventListeners/formListen.js";
import update from "../../../api/update/index.js";

export default function editProfile(profile) {
  const title = "Edit profile";

  const elements = [];

  const element1 = {
    type: "bannerAvatar",
    banner: { url: profile.banner.url, alt: profile.banner.alt },
    avatar: { url: profile.avatar.url, alt: profile.avatar.alt },
  };

  const element2 = {
    type: "biography",
    value: profile.bio,
  };

  const element3 = {
    type: "buttons",
    optionTwo: {
      text: "Save",
      listen: () => listener.updateProfile(profile.name),
    },
  };

  elements.push(element1, element2, element3);

  const data = { title, elements, formId: "edit-profile" };

  modal(data);
}
