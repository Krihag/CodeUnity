export default function () {
  function goBack() {
    window.history.back();
  }

  const previousPage = document.referrer;
  const wordSpan = document.getElementById("word");

  if (previousPage.includes("profile")) {
    wordSpan.innerText = "profile";
  } else if (previousPage.includes("feed")) {
    wordSpan.innerText = "feed";
  } else if (previousPage.includes("explore")) {
    wordSpan.innerText = "explore";
  }

  document.getElementById("backButton").addEventListener("click", goBack);
}
