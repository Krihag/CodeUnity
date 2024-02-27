import pageHandlers from "../../api/handlers/pageHandlers.js";
import storage from "../../utils/storage.js";
import fullPost from "../../components/post/fullPost/index.js";
import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";
import expandSidebar from "../../utils/helpers/expandSidebar.js";

export default async function () {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  const user = storage.load("profile");
  const data = pageHandlers.enterPage();
  const getRequest = await requests.get();
  const { data: post } = await getRequest.fetch(endpoints.posts.byId(id));

  const isOwner = user.name === post.author.name;
  fullPost(post, isOwner);
}
