import pageHandlers from "../../api/handlers/pageHandlers.js";
import postThumbnail from "../../components/post/thumbnail/index.js";
import storage from "../../utils/storage.js";
import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";
import filterPosts from "../../utils/helpers/filterPosts.js";
import profileList from "../../utils/helpers/profileList.js";
import createNewPost from "../../components/modal/specificModals/createNewPost.js";
import popularTags from "./popularTags.js";

const postsContainer = document.getElementById("posts-container");
const sortPosts = document.getElementById("sort-posts");
const connectProfiles = document.getElementById("connect-profiles");

export default async function pageSpecific() {
  pageHandlers.enterPage();
  const getRequest = await requests.get();
  const user = storage.load("profile");

  const { data: posts } = await getRequest.fetch(endpoints.posts.byFollowing());

  if (posts.length > 0) {
    posts.forEach((post) => {
      postThumbnail(post, postsContainer);
    });

    filterPosts(posts, sortPosts, postsContainer);
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

  const { data: profiles, meta: profilePage } = await getRequest.fetch(
    endpoints.profiles.all(100)
  );

  const profilesAll = await newPage(profilePage, profiles);
  console.log(profilesAll);

  profileList(profilesAll, user, connectProfiles, 5);

  console.log(profilesAll);

  document
    .getElementById("create-post-btn")
    .addEventListener("click", createNewPost);

  console.log("test");

  async function newPage(prevPage, profiles) {
    while (!prevPage.isLastPage) {
      const { data: newProfiles, meta: newPage } = await getRequest.fetch(
        endpoints.profiles.all(100, prevPage.nextPage)
      );
      profiles = [...profiles, ...newProfiles];
      prevPage = newPage;
    }

    return profiles;
  }

  popularTags(getRequest, postsContainer);
}
