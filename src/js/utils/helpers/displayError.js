export default function displayError(text, time = 7000) {
  text = text ? text : "Unknown error occurred.";

  const confirmation = document.createElement("div");
  confirmation.setAttribute(
    "class",
    "alert flex w-86 max-w-86 px-6 py-4 rounded-md items-center gap-x-3 fixed bottom-28 left-40 md:left-60 bg-red-200 confirmation-alert border-2 border-red-400"
  );

  const confirmationBox = document.createElement("span");
  confirmationBox.setAttribute(
    "class",
    "h-12 w-12 rounded-full bg-white flex items-center justify-center  border border-red-400"
  );

  const confirmationIcon = document.createElement("i");
  confirmationIcon.setAttribute("class", "fa-solid fa-xmark");

  confirmationBox.append(confirmationIcon);

  const confirmationText = document.createElement("h3");
  confirmationText.setAttribute("class", "text-lg text-primary");
  confirmationText.textContent = text;

  confirmation.append(confirmationBox, confirmationText);
  document.body.appendChild(confirmation);

  setTimeout(() => confirmation.remove(), time);
}
