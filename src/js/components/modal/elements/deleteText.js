export default function deleteText(ele) {
  const container = document.createElement("div");
  const headline = document.createElement("h2");
  headline.setAttribute("class", "text-2xl font-medium mb-4 text-center");

  const text = ele.text ? ele.text : "Are you sure you want to delete post?";
  headline.textContent = text;

  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "px-8 py-1 text-center text-lg");
  paragraph.textContent =
    "This action cannot be undone. The associated data will be permanently removed from the system. Please consider carefully before proceeding.";

  container.append(headline, paragraph);

  return container;
}
