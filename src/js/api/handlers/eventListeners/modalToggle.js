import confirmation from "../../../components/modal/elements/confirmation.js";

const modal = document.getElementById("modal-container");
const modalBody = document.querySelector(".modal-body");

export default {
  toggle: function () {
    const closeBtns = document.querySelectorAll(".modal-close");

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("flex");
        modal.classList.add("hidden");

        modalBody.innerHTML = "";
      });
    });
  },
  open: () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  },
  close: () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    modalBody.innerHTML = "";
    document.getElementById("modal-header").textContent = "";
  },

  confirmAction: (action = null) => {
    document.body.appendChild(confirmation(action));
    setTimeout(() => {
      // remove the confirmation above
      document.querySelector(".confirmation-alert").remove();
    }, 5000);
  },
};
