import requests from "../../../api/auth/requests/index.js";
import endpoints from "../../../api/auth/data/endpoints/index.js";

export default async function postLikedBy(post, mainContainer) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "bg-white hidden md:inline-block text-xs md:text-sm lg:text-base"
  );

  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "flex  items-center");

  const numLikes = post._count.reactions;
  const getRequest = await requests.get();

  const imgContainer = document.createElement("div");

  imgContainer.setAttribute(
    "class",
    "images relative w-24 flex justify-center items-center"
  );

  let text;

  let imgLeft = 0;

  if (numLikes === 1) {
    text = `${post.reactions[0].reactors[0]} liked the post`;
    imgLeft = 12;
  } else if (numLikes === 2) {
    if (post.reactions[0].reactors.length === 2) {
      text = `${post.reactions[0].reactors[0]} and ${post.reactions[0].reactors[1]} liked the post`;
      imgLeft = 6;
    } else
      text = `${post.reactions[0].reactors[0]} and ${post.reactions[1].reactors[0]} liked the post`;
  } else if (numLikes > 2) {
    text = `${post.reactions[0].reactors[0]} and ${
      numLikes - 1
    } others liked the post`;
  }

  const textLikedBy = document.createElement("p");
  textLikedBy.textContent = text;

  for (const reacts of post.reactions) {
    for (const reactor of reacts.reactors) {
      if (imgLeft > 12) break;
      const { data: personLiked } = await getRequest.fetch(
        endpoints.profiles.byName(reactor)
      );

      const imgLink = document.createElement("a");
      imgLink.setAttribute("class", " h-10 w-10  ");
      const userImg = document.createElement("img");
      userImg.setAttribute(
        "class",
        "rounded-full h-10 w-10 object-cover absolute border border-gray-500 left-" +
          imgLeft
      );

      imgLeft += 6;

      imgLink.href = `/profile/?name=${personLiked.name}`;

      userImg.src = personLiked.avatar.url;
      imgLink.append(userImg);
      imgContainer.prepend(imgLink);
    }
  }

  contentContainer.append(imgContainer, textLikedBy);
  container.append(contentContainer);
  mainContainer.append(container);

  return container;
}