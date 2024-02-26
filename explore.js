var exploreContainer = document.getElementById("explore-container");
    var exploreOverlay = document.getElementById("explore-overlay");

    exploreContainer.addEventListener("mouseenter", showOverlay); 
    exploreContainer.addEventListener("mouseleave", hideOverlay);

    function showOverlay() {
        exploreOverlay.classList.remove("opacity-0");
        exploreOverlay.classList.add("flex", "opacity-100");
    }

    function hideOverlay() {
        exploreOverlay.classList.remove("opacity-100");
        exploreOverlay.classList.add("opacity-0");
    }