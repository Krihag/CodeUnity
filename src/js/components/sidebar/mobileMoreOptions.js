import toggleContainer from "../dropdown/toggleContainer.js";

export default function mobileMoreOptions() {
  const container = document.querySelector("#hamburgerOptions");

  const moreOptions = document.createElement("div");
  moreOptions.setAttribute(
    "class",
    "pb-3 pt-2 flex items-center justify-between w-full "
  );

  const moreHeadline = document.createElement("p");
  moreHeadline.setAttribute("class", "font-medium text-primary");

  const closeIcon = document.createElement("i");
  closeIcon.setAttribute("class", "fa-solid fa-xmark text-lg");
  closeIcon.setAttribute("id", "closeMobileOptions");

  const borderBottom1 = document.createElement("span");
  borderBottom1.setAttribute("class", "border-b w-full");

  const settingsBtn = document.createElement("button");
  settingsBtn.setAttribute(
    "class",
    "text-primary py-3 flex gap-6 items-center md:text-lg"
  );
  settingsBtn.textContent = "Settings";

  const settingsIcon = document.createElement("i");
  settingsIcon.setAttribute("class", "fa-solid fa-gear text-secondary");

  const borderBottom2 = document.createElement("span");
  borderBottom2.setAttribute("class", "border-b w-full");

  const inboxBtn = document.createElement("button");
  inboxBtn.setAttribute(
    "class",
    "text-primary py-3 flex gap-6 items-center md:text-lg"
  );
  inboxBtn.textContent = "Inbox";

  const inboxIcon = document.createElement("i");
  inboxIcon.setAttribute("class", "fa-regular fa-envelope text-secondary");

  const borderBottom3 = document.createElement("span");
  borderBottom3.setAttribute("class", "border-b w-full");

  const logoutBtn = document.createElement("button");
  logoutBtn.setAttribute(
    "class",
    "text-primary py-3 flex gap-6 items-center md:text-lg"
  );
  logoutBtn.textContent = "Log out";

  const logoutIcon = document.createElement("i");
  logoutIcon.setAttribute(
    "class",
    "fa-solid fa-arrow-right-from-bracket text-secondary"
  );

  logoutBtn.append(logoutIcon);
  inboxBtn.append(inboxIcon);
  settingsBtn.append(settingsIcon);
  moreOptions.append(moreHeadline, closeIcon);
  container.append(
    moreOptions,
    borderBottom1,
    settingsBtn,
    borderBottom2,
    inboxBtn,
    borderBottom3,
    logoutBtn
  );

  const moreOptionsBtn = document.getElementById("hamburgerMobile");

  toggleContainer(moreOptionsBtn, container, true);

  return container;
}
