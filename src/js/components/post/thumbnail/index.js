import userDetails from "../comps/userDetails.js";
import detailsWithOptions from "../comps/detailsWithOptions.js";
import postBody from "../comps/postBody.js";
import tags from "../comps/tags.js";
import likesAndComments from "../comps/likesAndComments.js";
import commentInput from "../comps/commentInput.js";
import storage from "../../../utils/storage.js";

// Function for rendering a post and its details on the page
export default function (post, container) {
  const profile = storage.load("profile");
  const isOwner = profile.name === post.author.name ? true : false;

  const postContainer = document.createElement("div");
  postContainer.setAttribute(
    "class",
    "bg-white rounded-xl shadow-lg mb-6 md:mb-8 px-4 sm:px-12 pt-5 md:pt-9 pb-8 md:pb-12"
  );

  postContainer.append(isOwner ? detailsWithOptions(post) : userDetails(post));
  postContainer.appendChild(postBody(post));

  post.tags.length > 0 && postContainer.appendChild(tags(post.tags));

  postContainer.appendChild(likesAndComments(post));

  postContainer.appendChild(commentInput(post));

  container.appendChild(postContainer);
}
