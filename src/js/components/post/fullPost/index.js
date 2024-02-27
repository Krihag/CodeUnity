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
  container.append(isOwner ? detailsWithOptions(post) : userDetails(post));

  container.appendChild(postBody(post));
  post.tags.length > 0 && container.appendChild(tags(post.tags));
  const likesAndCommentsDiv = likesAndComments(post, true);

  // post._count.reactions > 0 && postLikedBy(post, likesAndCommentsDiv);
  container.appendChild(likesAndCommentsDiv);

  console.log(post);

  if (post.comments.length > 0) {
    const commentsContainer = displayComments(
      post.comments,
      isOwner,
      post.author.name
    );
    container.appendChild(commentsContainer);
  }

  container.appendChild(commentInput(post));
}
