window.addEventListener('scroll', function() {
    var backButton = document.getElementById('backButton');
    var breakpoint;
  
    if (window.innerWidth >= 1536) { 
      breakpoint = 1600;
    } else if (window.innerWidth >= 1280) { 
      breakpoint = 1500;
    } else if (window.innerWidth >= 768) { 
      breakpoint = 2000;
    } else if (window.innerWidth >= 640) { 
      breakpoint = 2500;
    } else { 
      breakpoint = 3000;
    }
  
    if (window.scrollY > breakpoint) {
      backButton.style.display = 'flex';
    } else {
      backButton.style.display = 'none';
    }
  });