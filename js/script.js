// script.js

// Toggle for mobile navigation
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Multi-Carousel Setup
document.addEventListener('DOMContentLoaded', () => {
  // Find all carousel containers
  const allCarousels = document.querySelectorAll('.carousel-container');

  // For each carousel container, set up slides
  allCarousels.forEach((carousel) => {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    // Show the first slide by default
    showSlide(slideIndex, slides);

    // Prev / Next event listeners
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        showSlide(slideIndex, slides);
      });

      nextBtn.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        showSlide(slideIndex, slides);
      });
    }
  });
});

// Helper function to display a given slide in a particular carousel
function showSlide(index, slides) {
  // Hide all slides first
  slides.forEach((slide) => {
    slide.style.display = 'none';
    slide.classList.remove('fade');
  });
  // Show the target slide
  slides[index].style.display = 'block';
  slides[index].classList.add('fade');
}
