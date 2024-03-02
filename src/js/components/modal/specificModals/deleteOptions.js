import modal from "../index.js";
import request from "../../../api/auth/requests/index.js";

export default function deleteOptions(post, comment = false) {
  const ele1 = { type: "deleteText" };
  const ele2 = {
    type: "buttons",
    optionTwo: { text: "Delete", request: request.delete },
    id: post.id,
  };

  if (comment) {
    ele1.text = "Are you sure you want to delete comment?";
    ele2.optionTwo.request = request.deleteComment;
    ele2.commentId = comment.id;
  }

  const data = { elements: [ele1, ele2] };

  modal(data);
}
