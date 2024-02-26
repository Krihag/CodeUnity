export default function deleteText(ele) {
  const container = document.createElement("div");
  const headline = document.createElement("h2");
  headline.classList.add("text-2xl", "font-medium", "mb-4", "text-center");
  headline.textContent = "Are you sure you want to delete post?";

  const paragraph = document.createElement("p");
  paragraph.classList.add("px-8", "py-1", "text-center", "text-lg");
  paragraph.textContent =
    "This action cannot be undone. The post and all associated data will be permanently removed from the system. Please consider carefully before proceeding.";

  container.append(headline, paragraph);

  return container;
}
