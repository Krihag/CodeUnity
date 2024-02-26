import imagePreview from "../../../utils/helpers/imagePreview.js";

export default function figureMedia(ele) {
  const figure = document.createElement("figure");
  figure.setAttribute("class", "mt-2");
  const img = document.createElement("img");
  img.setAttribute("id", "previewImage");
  img.setAttribute("src", ele.media ? ele.media.url : "../images/image.png");
  img.setAttribute("alt", ele.media && ele.media.alt);
  img.setAttribute("class", "rounded-md w-full mb-4 md:mb-6");
  figure.appendChild(img);

  const inputContainer = document.createElement("div");
  const label = document.createElement("label");

  label.classList.add("md:text-lg");
  const input = document.createElement("input");
  ele.name && (input.name = ele.name);
  ele.text && (label.textContent = ele.text);
  input.setAttribute(
    "class",
    "w-full border h-10 2xl:h-14 rounded mb-4 mt-2 outline-none pl-3 text-sm md:text-base"
  );
  ele.value && (input.value = ele.value);
  ele.placeholder && input.setAttribute("placeholder", ele.placeholder);
  inputContainer.append(label, input);

  figure.appendChild(inputContainer);

  imagePreview(input, img);

  return figure;
}
