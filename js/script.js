///// PRE LOADER START /////////////
let dotCount = 1;
const dots = document.getElementById('dots');
const dotInterval = setInterval(() => {
  dots.textContent = '.'.repeat(dotCount);
  dotCount = (dotCount % 3) + 1; // Cycle from 1 to 3 dots
}, 500);

// Remove loader after loading completes
window.addEventListener('load', () => {
  setTimeout(() => {
    clearInterval(dotInterval); // Stop dot animation
    document.getElementById('preloader').style.display = 'none';
  }, 3000); // Same as your loading bar duration
});
/////PRE LOADER END///////
////////////////////////////////////////
/// FOR BUTTON HAMBURGER WHEN CLICKED ///
/////////////////////////////////////////
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
////////////////////////////////////////
////// END OF BUTTON FUNTIONALITY//////
///////////////////////////////////////

//NAV ACTIVE INDICATOR
const navLinksArray = document.querySelectorAll('nav a');
navLinksArray.forEach(link => {
    link.addEventListener('click', function() {
        navLinksArray.forEach(link => link.classList.remove('active')); // Remove 'active' from all links
        this.classList.add('active'); // Add 'active' to the clicked link
    });
});
////////////////////
// FOR SLIDER///////
////////////////////
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove('active'));
    // Show the selected slide
    slides[index].classList.add('active');
}

// Show the first slide initially
showSlide(currentSlide);

// Function to move to the next slide automatically
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change the slide every 3 seconds (3000 ms)
setInterval(nextSlide, 3000);
//////////////////////////////////
///END OF SLIDER FUNCTIONALITY////
//////////////////////////////////
