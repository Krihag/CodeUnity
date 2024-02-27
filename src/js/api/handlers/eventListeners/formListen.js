import EventListener from "./index.js";
import authRequest from "../../auth/requests/index.js";

function formListener(formId, callback, tags = null) {
  const form = document.getElementById(formId);
  const listener = new EventListener(form, "submit", null, tags);

  return {
    form,
    listener,
    auth(tags = null, confirmMessage = null) {
      this.listener.submitForm(callback, tags, confirmMessage);
    },
  };
}

/**
 * Sets up event listeners for form submissions.
 * @param {string} formId - The ID of the form to attach the listener to.
 * @param {function} callback - A callback function that will be invoked with the form data when the form is submitted.
 * This function is typically used to make an authenticated request with the form data as the request body (will be mostly used for post requests).
 */
export default {
  /** @property {function} default - The default form listener function. */
  default: formListener,

  /** @property {function} login - The form listener function for the login form. */
  login: formListener("login-form", authRequest.login),

  /** @property {function} register - The form listener function for the registration form. */
  register: formListener("registrationForm", authRequest.register),

  /**   @property {function} createPost - The form listener function for creating a post.   */
  createPost: (tags, confirmMessage = "Post created") => {
    const data = formListener("create-post", authRequest.create);
    data.auth(tags, confirmMessage);
  },

  /**   @property {function} updatePost - The form listener function for updating a post.   */
  updatePost: (tags, postId, confirmMessage = "Post updated") => {
    authRequest.id = postId;
    const data = formListener(
      "edit-post",
      authRequest.update.bind(authRequest)
    );
    data.auth(tags, confirmMessage);
  },

  /**   @property {function} updateProfile - The form listener function for updating a profile.   */
  updateProfile: (name, confirmMessage = "Profile updated") => {
    authRequest.name = name;
    const data = formListener(
      "edit-profile",
      authRequest.profileMedia.bind(authRequest)
    );
    data.auth(null, confirmMessage);
  },
};
