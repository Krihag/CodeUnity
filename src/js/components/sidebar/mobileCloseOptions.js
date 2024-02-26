export default function mobileCloseOptions() {
    const closeIcon = document.querySelector("#hamburgerOptions i");
    const optionsContainer = document.querySelector("#hamburgerOptions");
    
    closeIcon.addEventListener("click", () => {
    optionsContainer.style.display = "none";
    });
}
