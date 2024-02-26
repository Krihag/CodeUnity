import userDetails from "./userDetails.js";
import dropDown from "../../dropdown/index.js";
import editPost from "../../modal/specificModals/editPost.js";

export default function userOptions(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex items-center justify-between");
  const details = userDetails(post);

  const options = document.createElement("div");
  options.setAttribute("class", "relative right-0");

  const button = document.createElement("button");
  button.setAttribute(
    "class",
    "flex items-center justify-center rounded-full h-14 editPost"
  );
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-ellipsis text-2xl px-4 md:px-0");

  button.appendChild(icon);
  options.appendChild(button);
  container.appendChild(details);
  container.appendChild(options);

  const choice1 = {
    text: "Edit post",
    icon: ["fa-regular", "fa-pen-to-square"],
    modal: editPost,
  };

  const choice2 = {
    text: "Delete post",
    icon: ["fa-solid", "fa-trash"],
    request: "delete",
  };

  const drop = dropDown(button, [choice1, choice2], post);
  options.appendChild(drop);

  return container;
}
