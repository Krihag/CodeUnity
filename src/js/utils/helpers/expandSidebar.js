export default function expandSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarBtn = document.getElementById("sidebar-expand-btn");
  const navLinks = document.querySelectorAll(".navOption");
  const sidebarImage = document.querySelector(".sidebar-image");

  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("md:w-24");
    sidebarImage.classList.toggle("hidden");
    sidebarImage.classList.toggle("flex");
    navLinks.forEach((link) => link.classList.toggle("hidden"));
  });
}
