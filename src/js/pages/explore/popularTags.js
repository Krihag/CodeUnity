import endpoints from "../../api/auth/data/endpoints/index.js";
import postThumbnail from "../../components/post/thumbnail/index.js";
import noPosts from "../feed/noPosts.js";

export default async function popularTags(getReq, postsContainer) {
  const tagsContainer = document.querySelector("#popular-tags-container");
  tagsContainer.querySelectorAll("button").forEach((tag) => {
    tag.addEventListener("click", async function () {
      const tagValue = tag.value;
      const posts = await getReq.fetch(endpoints.posts.byTag(tagValue));
      console.log(posts);

      postsContainer.innerHTML = ""; // Clear the posts container
      if (posts.data.length > 0) {
        posts.data.forEach((post) => {
          postThumbnail(post, postsContainer);
          // window.location.href = "#";
        });
      } else {
        postsContainer.append(noPosts());
      }
    });
  });
}
