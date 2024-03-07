import postEndpoints from "./post.js";
import profileEndpoints from "./profile.js";

// all endpoints for the Auth class
export default {
  login: () => "/auth/login",
  register: () => "/auth/register",

  // all profile endpoints (look inside profilesEndpoints for more details on each endpoint)
  profiles: profileEndpoints,

  // all post endpoints (look inside postsEndpoints for more details on each endpoint)
  posts: postEndpoints,
};
