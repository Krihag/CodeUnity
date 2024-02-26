import request from "../../../api/auth/requests/index.js";
import endpoints from "../../../api/auth/data/endpoints/index.js";
import postLikedBy from "../fullPost/postLikedBy.js";

export default function likesAndComments(post, fullPost = false) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "flex mt-5 md:mt-6 justify-between border-t items-center pt-3 md:pt-6 gap-6"
  );

  const likesComments = document.createElement("div");
  likesComments.setAttribute("class", "flex gap-8 ");

  const likes = document.createElement("div");
  likes.setAttribute(
    "class",
    "flex items-center gap-2 md:gap-3 cursor-pointer text-sm"
  );

  const likesIcon = document.createElement("i");
  likesIcon.setAttribute("class", "fa-regular fa-heart text-2xl");

  const likesCount = document.createElement("span");
  likesCount.textContent = post._count.reactions;
  likesCount.setAttribute("class", "font-normal");

  likesIcon.addEventListener("click", async () => {
    await request.react(post.id);
    const get = await request.get();

    const newPost = await get.fetch(endpoints.posts.byId(post.id));
    likesCount.textContent = newPost.data._count.reactions;
  });

  const comments = document.createElement("a");
  comments.setAttribute(
    "class",
    "flex items-center gap-2 md:gap-3 text-primary text-sm"
  );
  comments.href = `/post/?id=${post.id}`;

  const commentsIcon = document.createElement("i");
  commentsIcon.setAttribute("class", "fa-regular fa-comment text-2xl");

  const commentsCount = document.createElement("span");
  commentsCount.setAttribute("id", "comments-count");
  commentsCount.textContent = post._count.comments;
  commentsCount.setAttribute("class", "font-normal");
  const commentsText = document.createTextNode(" Comments");

  if (fullPost) {
    postLikedBy(post, container);
  } else {
    const viewComments = document.createElement("div");
    viewComments.setAttribute("class", "flex");
    const viewCommentsText = document.createElement("a");
    viewComments.setAttribute("class", "text-secondary hidden sm:inline-block");
    viewCommentsText.href = `/post/?id=${post.id}`;
    viewCommentsText.textContent = "View comments";
    viewCommentsText.setAttribute(
      "class",
      "text-sm font-medium md:text-base md:font-normal"
    );
    container.classList.add("pr-12");
    viewComments.append(viewCommentsText);
    container.appendChild(viewComments);
  }

  likes.append(likesIcon, likesCount);
  comments.append(commentsIcon, commentsCount, commentsText);
  likesComments.append(likes, comments);
  container.prepend(likesComments);

  return container;
}
