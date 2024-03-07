export default function noPosts() {
  let container = document.createElement("div");

  let header = document.createElement("h2");
  header.textContent = "Woops... Nothing to see here!";
  header.setAttribute(
    "class",
    "font-medium lg:text-lg xl:text-xl text-secondary mt-16"
  );
  container.appendChild(header);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "mt-4");

  let p1 = document.createElement("p");
  p1.textContent =
    "It seems like this area is a bit empty at the moment, but don't worry - there is plenty to explore!";
  p1.setAttribute("class", "text-sm md:text-base xl:text-lg");
  div2.appendChild(p1);

  let p2 = document.createElement("p");
  p2.textContent =
    "Expand your network by following people you might know or someone who inspires you.";
  p2.setAttribute("class", "text-sm md:text-base xl:text-lg");
  div2.appendChild(p2);

  let p3 = document.createElement("p");
  p3.textContent = "Ready to dive in? Click below to start exploring!";
  p3.setAttribute("class", "my-3 text-sm md:text-base xl:text-lg");
  div2.appendChild(p3);

  let a = document.createElement("a");
  a.textContent = "Explore posts";
  a.setAttribute(
    "class",
    "text-sm md:text-base bg-light p-3 lg:px-8 lg:py-4 rounded flex items-center justify-center max-w-44 mt-8"
  );
  a.setAttribute("href", "/explore/");
  div2.appendChild(a);

  container.appendChild(div2);

  return container;
}
