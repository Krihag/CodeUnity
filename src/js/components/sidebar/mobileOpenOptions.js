export default function mobileOpenOptions() {
    const moreButton = document.querySelector("#hamburgerMobile");
    const optionsContainer = document.querySelector("#hamburgerOptions");

    moreButton.addEventListener("click", function() {
        if (optionsContainer.style.display === "none" || optionsContainer.style.display === "") {
            optionsContainer.style.display = "flex";
        } else {
            optionsContainer.style.display = "none";
        }
    });
}

