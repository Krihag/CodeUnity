function goBack() {
  window.history.back();
}

function setWord() {
  var previousPage = document.referrer;
  var wordSpan = document.getElementById("word");

  if (previousPage.includes("profile")) {
    wordSpan.innerText = "profile";
  } else if (previousPage.includes("feed")) {
    wordSpan.innerText = "feed";
  } else if (previousPage.includes("explore")) {
    wordSpan.innerText = "explore";
  }
}

document.getElementById("backButton").addEventListener("click", goBack);
window.onload = setWord;