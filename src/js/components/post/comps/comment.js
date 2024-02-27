import formatDate from "../../../utils/helpers/formatDate.js";
import storage from "../../../utils/storage.js";

export default function displayComments(comments, isOwner = false) {
  const commentsContainer = document.createElement("div");
  commentsContainer.setAttribute("class", "displayComments");

  const user = storage.load("profile");
  if (comments && comments.length > 0) {
    comments.forEach((comment, index) => {
      const container = document.createElement("div");
      container.setAttribute(
        "class",
        index % 2 === 0
          ? "my-6 py-3 px-4 lg:py-5 lg:px-8 bg-gray-100 w-full"
          : "py-3 px-4 lg:py-5 lg:px-8 w-full"
      );

      const commentAuthor = document.createElement("div");
      commentAuthor.setAttribute(
        "class",
        "gap-6 sm:gap-10 lg:gap-16 flex pb-4 pt-4"
      );

      const profileDetails = document.createElement("a");
      profileDetails.setAttribute("class", "flex md:items-center");
      profileDetails.href = `/profile/?name=${comment.author.name}`;

      const profileImg = document.createElement("img");
      profileImg.src = comment.author.avatar.url;
      profileImg.alt = comment.author.avatar.alt;
      profileImg.setAttribute(
        "class",
        "rounded-full h-14 w-14 md:h-20 md:w-20 object-cover"
      );

      profileDetails.append(profileImg);

      const commentTextBox = document.createElement("div");
      commentTextBox.setAttribute("class", "w-3/4");

      const nameAndDelete = document.createElement("div");
      nameAndDelete.setAttribute("class", "flex justify-between");

      const profileName = document.createElement("a");
      profileName.textContent = comment.author.name;
      profileName.setAttribute(
        "class",
        "font-medium text-sm md:text-lg hover:text-secondary"
      );
      profileName.href = `/profile/?name=${comment.author.name}`;

      const usersComment = comment.author.name === user.name;
      console.log(usersComment);

      if (isOwner || usersComment) {
        const deleteComment = document.createElement("button");
        deleteComment.textContent = "Delete";
        deleteComment.setAttribute("class", "text-primary text-sm");
        deleteComment.addEventListener("click", async () => {
          await request.deleteComment(comment.id);
          container.remove();
        });
        nameAndDelete.append(profileName, deleteComment);
        commentTextBox.append(nameAndDelete);
      } else commentTextBox.append(profileName);

      const commentText = document.createElement("p");
      commentText.textContent = comment.body;
      commentText.setAttribute(
        "class",
        "text-sm sm:text-base lg:text-lg mt-2 mb-4"
      );

      const commentDate = document.createElement("p");
      commentDate.setAttribute("class", "muted text-primary");
      commentDate.textContent = formatDate(comment.created);

      commentTextBox.append(commentText, commentDate);
      commentAuthor.append(profileDetails, commentTextBox);
      container.append(commentAuthor);
      commentsContainer.append(container);
    });
  } else {
    const noComments = document.createElement("p");
    noComments.textContent = "No comments yet";

    commentsContainer.appendChild(noComments);
  }

  return commentsContainer;
}
