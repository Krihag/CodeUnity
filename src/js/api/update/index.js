import posts from "./posts/index.js";
import avatar from "./profile/avatar.js";

export default {
  // update profile posts
  posts,
  avatar,

  // store and update a value in a closure
  updateValue: function (initialValue) {
    let value = initialValue;
    return {
      update: (newValue) => {
        value = newValue;
      },
      getValue: () => value,
    };
  },
};
