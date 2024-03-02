import requests from "../../auth/requests/index.js";
import displayComments from "../../../components/post/comps/comment.js";
import storage from "../../../utils/storage.js";
import endpoints from "../../auth/data/endpoints/index.js";

export default async function updateComments(postId) {
  console.log(postId);
  const container = document.querySelector(".displayComments");
  const getRequest = await requests.get();
  const { data: post } = await getRequest.fetch(endpoints.posts.byId(postId));

  container.innerHTML = "";

  const user = storage.load("profile");
  const isOwner = post.author.name === user.name;
  console.log(isOwner);
  console.log(post.comments.length);

  container.appendChild(displayComments(post, isOwner));
}
