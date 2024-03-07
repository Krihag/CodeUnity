import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";

export default async function searchbar() {
  const searchInput = document.getElementById("search-input");
  const searchContainer = document.getElementById("search-result-container");

  const getRequest = await requests.get();

  // Event listener, search functionality
  searchInput.addEventListener("input", async (e) => {
    // e.preventDefualt();
    const searchValue = e.target.value.toLowerCase();

    searchContainer.innerHTML = "";
    if (searchValue.length < 1) {
      searchContainer.classList.add("hidden");
      return;
    }

    const { data: filteredPosts } = await getRequest.fetch(
      endpoints.posts.search(searchValue)
    );

    // const filteredPosts = posts.filter((post) => {
    //   return post.title.toLowerCase().includes(searchValue);
    // });
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

  const title = document.createElement("h2");
  console.log(post.title);
  title.textContent =
    post.title.length > 20 ? post.title.slice(0, 20) + "..." : post.title;
  title.classList.add("overflow-hidden");

  const username = document.createElement("p");
  username.classList.add("overflow-hidden");
  username.textContent = "by: ";
  const usernameSpan = document.createElement("span");
  usernameSpan.setAttribute("class", "font-medium text-secondary");
  usernameSpan.textContent = post.author.name;

  username.append(usernameSpan);
  container.append(title, username);

  return container;
}
