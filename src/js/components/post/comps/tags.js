export default function tags(tags) {
  const container = document.createElement("div");
  container.setAttribute("class", "pt-4 gap-2 md:gap-x-5 flex flex-wrap");

  tags.forEach((tag) => {
    const hashtag = tag.includes("#") ? tag : `#${tag}`;
    const span = document.createElement("span");
    span.setAttribute("class", "text-secondary text-sm 2xl:text-lg hover:font-medium");
    span.textContent = hashtag;
    container.appendChild(span);
  });
  return container;
}