window.addEventListener('scroll', function() {
    var backButton = document.getElementById('backButton');
    if (window.scrollY > 1100) { // Adjust the threshold as per your requirement
      backButton.style.display = 'flex';
    } else {
      backButton.style.display = 'none';
    }
  });