export default function searchbar(posts) {
  const searchInput = document.getElementById("search-input");
  const searchContainer = document.getElementById("search-result-container");

  // Event listener, search functionality
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    searchContainer.innerHTML = "";
    if (searchValue.length < 1) {
      searchContainer.classList.add("hidden");
      return;
    }

    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue);
    });
    if (filteredPosts.length < 1) {
      searchContainer.classList.add("hidden");
    } else {
      searchContainer.classList.remove("hidden");
      filteredPosts.forEach((post, i) => {
        if (i > 4) return;
        const resultDiv = result(post);
        searchContainer.appendChild(resultDiv);
      });
    }
  });
}

function result(post) {
  const container = document.createElement("a");
  container.setAttribute(
    "class",
    "border-t py-4 flex justify-between flex-wrap text-lg hover:bg-light duration-200 px-8"
  );
  container.href = `/post/?id=${post.id}`;

  // Create the title div and set its text content
  const titleDiv = document.createElement("div");
  titleDiv.textContent = post.title;

  const username = document.createElement("div");
  username.textContent = "by: ";
  const usernameSpan = document.createElement("span");
  usernameSpan.setAttribute("class", "font-medium text-secondary");
  usernameSpan.textContent = post.author.name;
  username.appendChild(usernameSpan);

  container.appendChild(titleDiv);
  container.appendChild(username);
  return container;
}
