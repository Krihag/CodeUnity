const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.querySelectorAll(".navLink");
const sidebarImage = document.querySelector(".sidebar-image");

hamburgerBtn.addEventListener("click", function () {
  sidebar.classList.toggle("expanded");

  if (sidebar.classList.contains("expanded")) {
    sidebar.classList.remove("w-24");
    sidebar.classList.add("md:w-60");
    sidebarImage.style.display = "flex";
    navLinks.forEach((link) => (link.style.justifyContent = "flex-start"));
    navLinks.forEach((link) => {
      const span = link.querySelector("span");
      if (span) {
        span.style.display = "inline";
      }
    });
  } else {
    sidebar.classList.remove("md:w-60");
    sidebar.classList.add("w-24");
    sidebarImage.style.display = "none";
    navLinks.forEach((link) => (link.style.justifyContent = "center"));
    navLinks.forEach((link) => {
      const span = link.querySelector("span");
      if (span) {
        span.style.display = "none";
      }
    });
  }
});

const status = document.querySelector(".status");
