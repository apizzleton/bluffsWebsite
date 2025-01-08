// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggles
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});

// If you have property carousels:
document.addEventListener('DOMContentLoaded', () => {
  const allCarousels = document.querySelectorAll('.carousel-container');

  allCarousels.forEach((carousel) => {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    const showSlide = (n) => {
      slides.forEach((slide) => {
        slide.style.display = 'none';
        slide.classList.remove('fade');
      });
      slides[n].style.display = 'block';
      slides[n].classList.add('fade');
    };

    if (slides.length > 0) {
      showSlide(slideIndex);
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
      });

      nextBtn.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        showSlide(slideIndex);
      });
    }
  });
});
