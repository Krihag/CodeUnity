import pageHandlers from "../../api/handlers/pageHandlers.js";
import postThumbnail from "../../components/post/thumbnail/index.js";
import storage from "../../utils/storage.js";
import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";
import filterPosts from "../../utils/helpers/filterPosts.js";
import profileList from "../../utils/helpers/profileList.js";

const postsContainer = document.getElementById("posts-container");
const sortPosts = document.getElementById("sort-posts");
const connectProfiles = document.getElementById("connect-profiles");

const getRequest = await requests.get();

export default async function pageSpecific() {
  pageHandlers.enterPage();

  const user = storage.load("profile");

  const { data: posts } = await getRequest.fetch(endpoints.posts.all());

  posts.forEach((post) => {
    postThumbnail(post, postsContainer);
  });
  console.log(sortPosts);

  filterPosts(posts, sortPosts, postsContainer);

  const { data: profiles, meta: profilePage } = await getRequest.fetch(
    endpoints.profiles.all(100)
  );

  const profilesAll = await newPage(profilePage, profiles);
  console.log(profilesAll);

  profileList(profilesAll, user, connectProfiles, 5);

  console.log(profilesAll);
}

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
