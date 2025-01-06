// script.js

// Toggle for mobile navigation
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Multi-Carousel Setup
document.addEventListener('DOMContentLoaded', () => {
  const allCarousels = document.querySelectorAll('.carousel-container');

  allCarousels.forEach((carousel) => {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    // Show the first slide
    showSlide(slideIndex, slides);

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

function showSlide(index, slides) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
    slide.classList.remove('fade');
  });
  slides[index].style.display = 'block';
  slides[index].classList.add('fade');
}
