import follow from "./follow.js";
import toggleContainer from "../dropdown/toggleContainer.js";

export default async function profileStats(profile, isOwner = false) {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "gap-12",
    "sm:gap-20",
    "md:gap-10",
    "lg:gap-20",
    "relative"
  );

  // Posts
  const posts = document.createElement("div");
  posts.classList.add("text-center", "text-primary", "flex", "flex-col");

  const xPosts = document.createElement("strong");
  xPosts.classList.add("md:text-lg");
  xPosts.textContent = profile._count.posts;
  xPosts.setAttribute("id", "posts-count");

  const xPostsText = document.createElement("span");
  xPostsText.classList.add("md:text-lg");
  xPostsText.textContent = "Posts";

  posts.append(xPosts, xPostsText);

  // Followers
  const followers = document.createElement("div");
  followers.setAttribute(
    "class",
    "text-center flex flex-col text-primary cursor-pointer"
  );

  const xFollowers = document.createElement("strong");
  xFollowers.classList.add("md:text-lg");
  xFollowers.setAttribute("id", "followers-count");
  xFollowers.textContent = profile._count.followers;

  const xFollowersText = document.createElement("span");
  xFollowersText.classList.add("md:text-lg");

  xFollowersText.textContent = "Followers";

  followers.append(xFollowers, xFollowersText);

  // Following
  const following = document.createElement("div");
  following.classList.add(
    "text-center",
    "text-primary",
    "flex",
    "flex-col",
    "cursor-pointer"
  );

  const xFollowing = document.createElement("strong");
  xFollowing.classList.add("md:text-lg");
  xFollowing.textContent = profile._count.following;
  xFollowing.setAttribute("id", "following-count");

  const xFollowingText = document.createElement("span");
  xFollowingText.classList.add("md:text-lg");
  xFollowingText.textContent = "Following";

  following.append(xFollowing, xFollowingText);
  container.append(posts, followers, following);

  const profileFollows = await follow(profile, false, isOwner);
  const profileFollowing = await follow(profile, true, isOwner);
  container.appendChild(profileFollowing);
  container.appendChild(profileFollows);
  toggleContainer(followers, profileFollows, true);
  toggleContainer(following, profileFollowing, true);

  return container;
}
