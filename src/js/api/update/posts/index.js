import endpoints from "../../auth/data/endpoints/index.js";
import storage from "../../../utils/storage.js";
import postTemp from "../../../components/post/thumbnail/index.js";
import requests from "../../auth/requests/index.js";

export default async function posts() {
  const getRequest = await requests.get();

  const curPage = window.location.pathname;

  let endpoint;
  if (curPage.includes("/profile")) {
    const profile = storage.load("profile");
    endpoint = endpoints.posts.byProfile(profile.name);
  } else if (curPage.includes("/feed")) {
    endpoint = endpoints.posts.all();
  } else return;

  const { data: profilePosts } = await getRequest.fetch(endpoint);
  document.getElementById("posts-count").textContent = profilePosts.length;
  const postContainer = document.getElementById("posts-container");

  postContainer.innerHTML = "";

  profilePosts.forEach((post) => postTemp(post, postContainer));
}
