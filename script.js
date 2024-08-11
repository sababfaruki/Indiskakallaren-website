// JavaScript for toggling the mobile menu
document.getElementById('mobile-menu-button').onclick = function () {
  var menu = document.getElementById('mobile-menu');
  var iconMenu = document.getElementById('icon-menu');
  var iconClose = document.getElementById('icon-close');

  // Toggle the menu visibility
  if (menu.classList.contains('menu-closed')) {
      menu.classList.remove('hidden');
      menu.classList.remove('menu-closed');
      menu.classList.add('menu-open');
      iconMenu.classList.add('hidden');
      iconClose.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
      menu.classList.remove('menu-open');
      menu.classList.add('menu-closed');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
  }
};

// Slideshow JavaScript
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Show specific slide
function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
      slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
  }
  slides[slideIndex - 1].classList.remove("hidden");
}

// Automatic Slideshow
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 3000); // Change image every 3 seconds
}

// Start the automatic slideshow
autoSlides();
