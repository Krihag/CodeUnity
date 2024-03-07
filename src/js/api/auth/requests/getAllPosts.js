import header from "../data/headers.js";
import Auth from "../index.js";

export default async function getPosts() {
  const method = "GET";
  const headers = header.authWithoutContent();
  const endpoint = `/social/posts?_author=true`;

  const getPosts = new Auth(method, headers, endpoint);
  const posts = await getPosts.fetch();
  return posts;
}
