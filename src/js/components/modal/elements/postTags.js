import addTag from "../../../api/handlers/eventListeners/addTag.js";

export default function postTags(ele, tags) {
  const container = document.createElement("div");

  const tagsLabel = document.createElement("label");
  tagsLabel.setAttribute("for", "tags");
  tagsLabel.setAttribute("class", "md:text-lg");
  tagsLabel.textContent = "Tags:";

  const tagsContainer = document.createElement("div");
  tagsContainer.setAttribute("class", "flex gap-4 flex-col");

  const tagInputContainer = document.createElement("div");
  tagInputContainer.setAttribute("class", "w-full md:w-1/2 flex h-10 2xl:h-20 rounded my-2");

  const hashtag = document.createElement("span");
  hashtag.setAttribute(
    "class",
    "hashtag border border-r-0 h-10 w-10 2xl:h-16 2xl:w-16 flex items-center justify-center md:text-xl md:font-medium px-5"
  );
  hashtag.textContent = "#";

  const tagInput = document.createElement("input");
  tagInput.setAttribute("type", "text");
  tagInput.setAttribute("id", "tags-input");
  tagInput.setAttribute("class", "w-full border outline-none pl-3 h-10 2xl:h-16 text-sm md:text-base");
  tagInput.setAttribute("minlength", "2");
  tagInput.setAttribute("maxlength", "12");
  tagInput.setAttribute("pattern", "[a-zA-Z0-9]+");
  tagInput.setAttribute("name", "tags");
  tagInput.setAttribute(
    "title",
    "Must contain between 2-12 characters. Can only contain lower- and uppercase letters and numbers."
  );

  const addTagButton = document.createElement("button");
  addTagButton.setAttribute("id", "addTag");
  addTagButton.setAttribute("type", "button");
  addTagButton.setAttribute("class", "bg-light text-2xl h-10 w-10 2xl:h-16 2xl:w-16 flex items-center justify-center px-5");
  addTagButton.textContent = "+";

  const tagContainer = document.createElement("div");
  tagContainer.setAttribute("id", "tagContainer");
  tagContainer.setAttribute("class", "flex gap-4");

  tagInputContainer.append(hashtag, tagInput, addTagButton);
  tagsContainer.append(tagInputContainer, tagContainer);
  container.append(tagsLabel, tagsContainer);

  addTag(tags, addTagButton, tagInput, tagContainer);
  return container;
}
