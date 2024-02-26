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

export default async function pageSpecific() {
  pageHandlers.enterPage();

  const user = storage.load("profile");

  const getRequest = await requests.get();

  const { data: posts } = await getRequest.fetch(endpoints.posts.all());

  posts.forEach((post) => {
    postThumbnail(post, postsContainer);
  });
  console.log(sortPosts);

  filterPosts(posts, sortPosts, postsContainer);

  window.addEventListener("DOMContentLoaded", async () => {
    // const userProfile = profiles.find((profile) => profile.name === user.name);
    const { data: profiles } = await getRequest.fetch(endpoints.profiles.all());
    console.log(profiles);
    profileList(profiles, user, connectProfiles, 5);
  });
}
