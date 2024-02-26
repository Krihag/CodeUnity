import modal from "../index.js";
import listener from "../../../api/handlers/eventListeners/formListen.js";
import update from "../../../api/update/index.js";

export default function editPost(post) {
  const title = "Edit post";

  const formId = "edit-post";
  let tags = post.tags;
  console.log(tags);

  const updateTags = update.updateValue(tags);

  const elements = [];
  const element1 = {
    type: "image",
    name: "media",
    media: post.media,
    value: post.media?.url,
    input: true,
    text: "Image:",
  };
  const element2 = { type: "input", text: "Title:", value: post.title };
  const element3 = {
    type: "textarea",
    text: "Description:",
    value: post.body,
    name: "body",
  };

  const element4 = {
    type: "tags",
    text: "Tags",
    addTag: true,
  };

  const element5 = {
    type: "buttons",
    id: post.id,
    optionTwo: {
      text: "Save",
      listen: () => listener.updatePost(updateTags, post.id),
    },
  };

  elements.push(element1, element2, element3, element4, element5);

  const data = { title, elements, formId, updateTags };
  data.id = post.id;

  modal(data, post);
}
