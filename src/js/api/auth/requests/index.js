import headers from "../data/headers.js";
import Auth from "../index.js";
import loginSpecific from "./login.js";
import endpoints from "../data/endpoints/index.js";
import storage from "../../../utils/storage.js";
import updates from "../../update/index.js";
import modal from "../../handlers/eventListeners/modalToggle.js";
import updateComments from "../../update/posts/updateComments.js";

const request = (
  body,
  endpoint,
  header = headers.withAuthToken(),
  method = "post",
  confirmMessage = null
) => new Auth(method, header, endpoint, body, confirmMessage);

export default {
  default: request,

  // Login request
  login: async function (body) {
    const data = request(body, endpoints.login(), headers.basic());
    const newData = await loginSpecific(data);
    return newData;
  },

  register: async function (body, endpoint = endpoints.register()) {
    console.log("registering: ");
    console.log(body);
    const data = request(body, endpoint, headers.basic());
    const newData = await data.fetch();
    return newData;
  },

  // Change profile media request (works with either banner or avatar)
  profileMedia: async function (body, message = "Updated profile media") {
    const username = this.name;
    const data = request(
      body,
      endpoints.profiles.changeImg(username),
      headers.withAuthToken(),
      "PUT",
      message
    );
    const response = await data.fetch();
    updates.avatar(body, response, username);

    modal.close();
  },

  //standard get request. Can be used for any get request.
  // Endpoint is optional in here, but if not provided, it needs to be provided when calling the fetch function.
  get: async function (endpoint = null) {
    const data = request(null, endpoint, headers.authWithoutContent(), "get");
    return data;
  },

  // create new post
  create: async function (body, message = null) {
    const data = request(
      body,
      endpoints.posts.create(),
      headers.withAuthToken(),
      "post",
      message
    );
    const createdPost = await data.fetch();
    if (createdPost.data) {
      modal.close();
      updates.posts();
    }
  },

  // Comment on post
  comment: async function (body, id, message = "Comment added") {
    const data = request(
      body,
      endpoints.posts.comment(id),
      headers.withAuthToken(),
      "post",
      message
    );
    const response = await data.fetch();

    if (response.data) {
      updateComments(id);
    }
  },

  // Update post

  update: async function (body, message = "Post updated") {
    console.log(this);
    // console.log(this.id);
    const id = this.id;
    const data = request(
      body,
      endpoints.posts.update(id),
      headers.withAuthToken(),
      "put",
      message
    );
    const response = await data.fetch();

    if (response.data) {
      modal.close();
      updates.posts();
    }
  },

  // Delete post
  delete: async function (id, message = "Post deleted") {
    const data = request(
      null,
      endpoints.posts.delete(id),
      headers.authWithoutContent(),
      "delete",
      message
    );
    const response = await data.fetch();

    if (response == "deleted") {
      modal.close();
      updates.posts();
    }
  },

  // delete comment

  deleteComment: async function (
    postId,
    commentId,

    message = "Comment deleted"
  ) {
    const data = request(
      null,
      endpoints.posts.comment(postId, commentId),
      headers.authWithoutContent(),
      "delete",
      message
    );
    const response = await data.fetch();

    if (response == "deleted") {
      updateComments(postId);
    }
  },

  // react to post
  react: async function (id) {
    const data = request(
      null,
      endpoints.posts.react(id),
      headers.authWithoutContent(),
      "put"
    );
    const response = await data.fetch();
  },
};
