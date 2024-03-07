import userDetails from "../comps/userDetails.js";
import detailsWithOptions from "../comps/detailsWithOptions.js";
import postBody from "../comps/postBody.js";
import tags from "../comps/tags.js";
import likesAndComments from "../comps/likesAndComments.js";
import commentInput from "../comps/commentInput.js";
import displayComments from "../comps/comment.js";
import postLikedBy from "./postLikedBy.js";

export default function renderPost(post, isOwner) {
  const container = document.getElementById("post-container");
  container.setAttribute(
    "class",
    "bg-white rounded-xl shadow-lg mb-8 px-4 sm:px-12 pt-5 lg:pt-9 pb-12 min-h-96 mx-4 sm:mx-10 md:mx-12 lg:mx-16"
  );
  container.append(isOwner ? detailsWithOptions(post) : userDetails(post));

  container.appendChild(postBody(post));
  post.tags.length > 0 && container.appendChild(tags(post.tags));
  const likesAndCommentsDiv = likesAndComments(post, true);

  // post._count.reactions > 0 && postLikedBy(post, likesAndCommentsDiv);
  container.appendChild(likesAndCommentsDiv);

  if (post.comments.length > 0) {
    const commentsContainer = displayComments(post, isOwner, post.author.name);
    container.appendChild(commentsContainer);
  }

  container.appendChild(commentInput(post));
}
