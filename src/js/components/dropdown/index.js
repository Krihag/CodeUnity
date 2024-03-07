import dropDownItem from "./dropDownItem.js";
import toggleContainer from "./toggleContainer.js";

export default function dropdown(ele, choices, post) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "options hidden absolute bg-white rounded shadow-xl border min-w-72 right-0 top-14 z-10 py-6 px-4 w-full"
  );

  choices.forEach((choice, i) => {
    i === 0 && (choice.first = true);
    container.appendChild(dropDownItem(choice, post));
  });

  toggleContainer(ele, container);

  return container;
}
