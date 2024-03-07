import update from "../../update/index.js";
import displayError from "../../../utils/helpers/displayError.js";

export default function addTag(updateTags, btn, input, container) {
  const allTags = updateTags.getValue();

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value === "") {
      return;
    }

    if (allTags.length > 5) {
      return;
    }
    if (input.checkValidity()) {
      if (allTags.includes(input.value)) {
        return;
      }
      const newTag = document.createElement("div");
      newTag.classList.add(
        "border",
        "flex",
        "items-center",
        "justify-center",
        "rounded",
        "text-lg",
        "pl-2",
        "pr-6",
        "py-2",
        "text-secondary"
      );

      newTag.textContent = `#${input.value}`;

      const icon = document.createElement("i");
      icon.classList.add(
        "fa-solid",
        "fa-xmark",
        "text-secondary",
        "text-sm",
        "px-4",
        "cursor-pointer"
      );

      newTag.prepend(icon);
      const tagValue = input.value;

      icon.addEventListener("click", function () {
        allTags = allTags.filter((tag) => tag !== tagValue);
        newTag.remove();
      });
      allTags.push(input.value);

      container.append(newTag);
    } else {
      displayError("Invalid tag input. Please try again.");
    }

    input.value = "";
  });
}
