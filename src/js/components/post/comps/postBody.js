export default function postBody(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "md:pt-2");

  if (post.media) {
    const imgContainer = document.createElement("a");
    imgContainer.href = `/post/?id=${post.id}`;
    const img = document.createElement("img");
    img.src = post.media.url;
    img.alt = "Post Image";
    img.setAttribute("class", "w-full object-cover rounded-lg my-4 md:my-5");
    imgContainer.appendChild(img);
    container.appendChild(imgContainer);
  }

  const title = document.createElement("h2");
  title.setAttribute("class", "md:text-xl font-medium mt-5 mb-2");
  title.textContent = post.title;

  const body = document.createElement("p");
  body.setAttribute("class", "md:text-lg");
  body.textContent = post.body;

  container.appendChild(title);
  container.appendChild(body);

  return container;
}
