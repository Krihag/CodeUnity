import update from "../../update/index.js";

export default function addTag(updateTags, btn, input, container) {
  const allTags = updateTags.getValue();
  console.log(allTags);

  // const allTags = ["CodeUnity"];
  console.log(allTags);

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value === "") {
      console.log("Please enter a tag");
      return;
    }

    if (allTags.length > 5) {
      console.log("You can not add more than 5 tags.");
      return;
    }
    if (input.checkValidity()) {
      if (allTags.includes(input.value)) {
        console.log("Tag already exists");
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
      console.log(allTags);
      container.append(newTag);
    } else {
      console.log("Invalid tag input. Please try again.");
    }

    input.value = "";
  });
}
