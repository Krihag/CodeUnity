import requests from "../../auth/requests/index.js";
import endpoints from "../../auth/data/endpoints/index.js";
import thumbnail from "../../../components/post/thumbnail/index.js";

export default async function observePosts() {
  const getReq = await requests.posts.get();
  let allPosts = [];
  let observer;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  async function loadPosts(curPage) {
    if (curPage.isLastPage) return;
    let { data: posts, meta: newPage } = await getReq(
      endpoints.posts.get(5, curPage)
    );

    posts.forEach((post, i) => {
      const curPost = thumbnail(post, postsContainer);
      if (i === 3) {
        observer.observe(curPost);
      }
    });
    allPosts = [...allPosts, ...posts];

    return { posts, newPage };
  }
}
//  async function autoLoadPosts() {
//
//   const { data: posts, meta: pageData } = await getReq(
//     endpoints.posts.get(5, curPage)
//   );

//   let allPosts = posts;

//   const postData = await loadPosts(allPosts, getReq, pageData);
//   console.log(postData);
// }
