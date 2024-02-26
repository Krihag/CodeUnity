import itemOnClick from "./itemOnClick.js";

export default function dropDownItem(item, post) {
  const choice = document.createElement("button");

  !item.first && choice.classList.add("border-t");
  choice.classList.add(
    "block",
    "w-full",
    "text-left",
    "px-4",
    "py-3",
    "text-sm",
    "text-gray-700",
    "hover:bg-light",
    "hover:text-gray-900"
  );
  const spanText = document.createElement("span");
  spanText.textContent = item.text;
  if (item.icon) {
    const icon = document.createElement("i");
    icon.classList.add(
      ...item.icon,
      "text-xl",
      "text-secondary",
      "mr-5",
      "w-10"
    );
    choice.append(icon);
  }

  choice.append(spanText);

  choice.addEventListener("click", function (e) {
    console.log(item);
    console.log("clicked " + e.target.textContent);
    itemOnClick(item, post);
  });

  return choice;
}
