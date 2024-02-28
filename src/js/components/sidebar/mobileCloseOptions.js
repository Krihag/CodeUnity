export default function mobileCloseOptions() {
    const closeIcon = document.querySelectorAll("#moreOptionsClose");
    const optionsContainer = document.querySelector("#hamburgerOptions");
    
    closeIcon.addEventListener("click", () => {
    optionsContainer.style.display = "hidden";
    });
}
