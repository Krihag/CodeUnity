import postThumbnail from "../../components/post/thumbnail/index.js";

export default function filterPosts(posts, element, container) {
  element.addEventListener("change", (e) => {
    const choice = e.target.value;

    const filteredPosts = sortPost(posts, choice);

    container.innerHTML = "";
    filteredPosts.forEach((post) => postThumbnail(post, container));
  });
}

function sortPost(posts, choice) {
  switch (choice) {
    case "latest":
      return posts.sort((a, b) => new Date(b.created) - new Date(a.created));
    case "order":
      return posts.sort((a, b) => a.title.localeCompare(b.title));
    case "reverse":
      return posts.sort((a, b) => b.title.localeCompare(a.title));
    case "most-liked":
      return posts.sort((a, b) => b._count.reactions - a._count.reactions);
    case "most-commented":
      return posts.sort((a, b) => b._count.comments - a._count.comments);
    default:
      return posts;
  }
}
