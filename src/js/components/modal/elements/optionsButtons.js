import modal from "../../../api/handlers/eventListeners/modalToggle.js";
import update from "../../../api/update/index.js";

export default function optionsButton(ele) {
  const optionOne = ele.optionOne ? ele.optionOne.text : "Cancel";
  const optionTwo = ele.optionTwo ? ele.optionTwo.text : "Save";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute(
    "class",
    "flex gap-4 mt-2 md:mt-6 justify-start md:justify-end"
  );

  const firstButton = document.createElement("button");
  firstButton.type = "button";
  firstButton.setAttribute(
    "class",
    "rounded border flex items-center justify-center px-6 py-3 md:px-10 md:py-4 hover:bg-light duration-500 modal-close"
  );

  firstButton.textContent = optionOne;

  const secondButton = document.createElement("button");
  secondButton.type = "submit";
  secondButton.setAttribute(
    "class",
    "rounded bg-secondary flex items-center justify-center px-10 py-4 text-white hover:bg-light duration-500 hover:text-primary"
  );
  secondButton.textContent = optionTwo;

  buttonsContainer.append(firstButton, secondButton);

  if (optionTwo == "Delete") {
    secondButton.addEventListener("click", async function (e) {
      e.preventDefault();
      modal.close();
      try {
        if (ele.commentId) await ele.optionTwo.request(ele.id, ele.commentId);
        else await ele.optionTwo.request(ele.id);
      } catch (error) {
        console.error(error);
      }
    });
  } else if (optionTwo) {
    try {
      ele.optionTwo.listen();
    } catch (error) {
      console.error(error);
    }
  }

  return buttonsContainer;
}
