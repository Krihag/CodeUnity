import figureMedia from "./elements/figureMedia.js";
import createInput from "./elements/createInput.js";
import modal from "../../api/handlers/eventListeners/modalToggle.js";
import createTextArea from "./elements/createTextArea.js";
import deleteText from "./elements/deleteText.js";
import optionsButtons from "./elements/optionsButtons.js";
import postTags from "./elements/postTags.js";
import editBannerAvatar from "./elements/editBannerAvatar.js";
import editBio from "./elements/editBio.js";

export default function (data) {
  const title = document.getElementById("modal-header");

  const updateTags = data.updateTags ? data.updateTags : null;

  title.textContent = data.title ? data.title : "";

  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";
  data.formId && modalBody.setAttribute("id", data.formId);

  const types = data.elements;
  console.log(types);
  if (types)
    types.forEach((ele) => modalBody.appendChild(checkType(ele, updateTags)));

  modal.toggle();
}

function checkType(ele, updateTags) {
  console.log(updateTags);
  let data = null;
  if (ele.type === "buttons") data = optionsButtons(ele);
  else if (ele.type === "input") data = createInput(ele);
  else if (ele.type === "select") data = createSelect(ele);
  else if (ele.type === "textarea") data = createTextArea(ele);
  else if (ele.type === "image") data = figureMedia(ele);
  else if (ele.type === "deleteText") data = deleteText(ele);
  else if (ele.type === "tags") data = postTags(ele, updateTags);
  else if (ele.type === "bannerAvatar") data = editBannerAvatar(ele);
  else if (ele.type === "biography") data = editBio(ele);
  return data;
}
