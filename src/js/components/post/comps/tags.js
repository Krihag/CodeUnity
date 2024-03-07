export default function tags(tags) {
  const container = document.createElement("div");
  container.setAttribute("class", "pt-4 gap-2 md:gap-x-5 flex flex-wrap");

  tags.forEach((tag) => {
    if (tag === "") return;
    const hashtag = tag.includes("#") ? tag : `#${tag}`;
    const span = document.createElement("span");
    span.setAttribute(
      "class",
      "text-secondary text-sm xl:text-base 2xl:text-lg cursor-pointer"
    );
    span.textContent = hashtag;
    container.appendChild(span);
  });
  return container;
}