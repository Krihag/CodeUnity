import formatDate from "../../../utils/helpers/formatDate.js";

export default function userDetails(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex items-center gap-6");

  const imgContainer = document.createElement("a");
  imgContainer.setAttribute(
    "class",
    "w-14 h-14 md:w-16 md:h-16 flex items-center"
  );
  imgContainer.href = `/profile/?name=${post.author.name}`;

  const img = document.createElement("img");
  img.src = post.author.avatar.url;
  img.alt = post.author.avatar.alt;
  img.setAttribute(
    "class",
    "w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover"
  );
  imgContainer.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "ml-2 sm:ml-4 md:ml-8");

  const nameP = document.createElement("a");
  nameP.setAttribute("class", "font-medium sm:text-lg hover:text-secondary");
  nameP.textContent = post.author.name;
  nameP.href = `/profile/?name=${post.author.name}`;

  const timeP = document.createElement("p");
  timeP.setAttribute("class", "text-muted text-sm sm:text-base");
  timeP.textContent = formatDate(post.created);

  textContainer.append(nameP, timeP);
  container.append(imgContainer, textContainer);

  return container;
}
