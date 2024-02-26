export default function (ele, container, clickInside = false) {
  function showContainer(event) {
    event.stopPropagation();
    container.classList.remove("hidden");
    container.classList.add("block");

    ele.removeEventListener("click", showContainer);

    function hideContainer(e) {
      if (clickInside && container.contains(e.target)) return;
      container.classList.add("hidden");
      document.removeEventListener("click", hideContainer);
      ele.addEventListener("click", showContainer);
    }

    document.addEventListener("click", hideContainer);
  }
  ele.addEventListener("click", showContainer);
}
