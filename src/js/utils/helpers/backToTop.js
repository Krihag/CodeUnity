export default function backToTop() {
  window.addEventListener("scroll", function () {
    var backButton = document.getElementById("backButton");
    var breakpoint;

    if (window.innerWidth >= 1536) {
      breakpoint = 1600;
    } else {
      breakpoint = 1500;
    }

    if (window.scrollY > breakpoint) {
      backButton.classList.add("flex");
      backButton.classList.remove("hidden");
    } else {
      backButton.classList.remove("flex");
      backButton.classList.add("hidden");
    }
  });
}
