import modal from "../index.js";
import request from "../../../api/auth/requests/index.js";

export default function deleteOptions(post) {
  const ele1 = { type: "deleteText" };
  const ele2 = {
    type: "buttons",
    optionTwo: { text: "Delete", request: request.delete },
    id: post.id,
  };

  const data = { elements: [ele1, ele2] };

  modal(data);
}
