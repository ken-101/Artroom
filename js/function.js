function navigateLeft() {
  const slides = document.querySelectorAll('.slide-box');
  const currentSlide = document.querySelector('.active');
  let previousSlide;

  slides.forEach((slide, index) => {
    if (slide.id === currentSlide.id) {
      previousSlide = index === 0 ? slides[slides.length - 1] : slides[index - 1];
    }
  });

  currentSlide.classList.remove('active');
  currentSlide.style.display = 'none';
  previousSlide.classList.add('active');
  previousSlide.style.display = 'block';
}

function navigateRight() {
  const slides = document.querySelectorAll('.slide-box');
  const currentSlide = document.querySelector('.active');
  let nextSlide;

  slides.forEach((slide, index) => {
    if (slide.id === currentSlide.id) {
      nextSlide = index === slides.length - 1 ? slides[0] : slides[index + 1];
    }
  });

  currentSlide.classList.remove('active');
  currentSlide.style.display = 'none';
  nextSlide.classList.add('active');
  nextSlide.style.display = 'flex';
}
