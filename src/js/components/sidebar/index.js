const sidebarContainer = document.querySelector("#sidebarContainer");
const sidebarProfileLink = document.querySelector("#sidebarProfileLink");

export default function sidebarDetails(profile) {
  const sidebarContent = document.createElement("div");
  sidebarContent.setAttribute("class", "relative");

  const sidebarImage = document.createElement("img");
  sidebarImage.setAttribute("class",
    "2xl:w-28 2xl:h-28 w-20 h-20 rounded-full object-cover 2xl:mt-16 mt-4"
  );
  sidebarImage.src = profile.avatar.url;
  sidebarImage.alt = profile.avatar.alt;
  sidebarImage.setAttribute("id", "sidebar-avatar");

  const sidebarStatus = document.createElement("span");
  sidebarStatus.setAttribute("class",
    "active rounded-full bg-green-700 2xl:h-6 2xl:w-6 h-4 w-4 absolute bottom-0 right-0 border-white border"
  );

  sidebarContent.append(sidebarImage, sidebarStatus);

  const sidebarName = document.createElement("strong");
  sidebarName.setAttribute("class", "text-white mt-3 2xl:text-lg");
  sidebarName.textContent = profile.name;

  const changeStatus = document.createElement("button");
  changeStatus.setAttribute("class", "text-white 2xl:mt-1 status text-sm");
  changeStatus.textContent = "Change status";

  sidebarContainer.append(sidebarContent, sidebarName, changeStatus);

  sidebarProfileLink.href = `/profile/?name=${profile.name}`;

  return sidebarContainer;
}