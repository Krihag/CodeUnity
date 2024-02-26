const postFilter = "_author=true&_reactions=true&_comments=true";

// Contains all endpoints for post requests
export default {
  // - all posts
  all: () => `/social/posts?${postFilter}`,

  // - all posts by a specific tag (default tag is "CodeUnity")
  byTag: (tag = "CodeUnity") => `/social/posts?tag=${tag}&${postFilter}`,

  //  -get  specific post by id
  byId: (id) => `/social/posts/${id}?${postFilter}`,

  // - delete a specific post by id
  delete: (id) => `/social/posts/${id}`,

  // - update a specific post by id
  update: (id) => `/social/posts/${id}`,

  // - all posts made by profiles that the current user is following
  byFollowing: () => `/social/posts/following?${postFilter}`,

  // - all posts made by a specific profile by name
  byProfile: (profile) => `/social/profiles/${profile}/posts?${postFilter}`,

  // - react to a specific post by id and reaction as a symbol/emoji (default reaction is "👍")
  react: (id, reaction = "👍") => `/social/posts/${id}/react/${reaction}`,

  create: () => "/social/posts",

  // - comment on a specific post by id (can also delete a specific comment by id if provided commentId)
  comment: (id, commentId = "") => `/social/posts/${id}/comment/${commentId}`,

  // - search for posts by query
  search: (query) => `/social/posts/search?q=${query}&${postFilter}`,

  // - get posts endpoint depending on what page user is currently on
  byPage: (profile = false) => {},
};
