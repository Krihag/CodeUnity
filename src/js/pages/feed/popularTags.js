import endpoints from "../../api/auth/data/endpoints/index.js";
import postThumbnail from "../../components/post/thumbnail/index.js";

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
          window.location.href = "#";
        });
      } else {
        postsContainer.innerHTML = `<div>
       <h2 class="font-medium lg:text-lg xl:text-xl text-secondary mt-16">Woops... Nothing to see here!</h2>
       <div class="mt-4">
       <p class="text-sm md:text-base xl:text-lg">It seems like this area is a bit empty at the moment, but don't worry - there is plenty to explore!</p>
       <p class="text-sm md:text-base xl:text-lg">Expand your network by following people you might know or someone who inspires you.</p>
       <p class="my-3 text-sm md:text-base xl:text-lg">Ready to dive in? Click below to start exploring!</p>
   
       <a class="text-sm md:text-base bg-light p-3 lg:px-8 lg:py-4 rounded flex items-center justify-center max-w-44 mt-8" href="/explore/">Explore posts</a>
       </div>`;
      }
    });
  });
}
