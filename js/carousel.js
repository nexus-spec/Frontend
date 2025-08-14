const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;
let slideInterval;

// Show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Move to next slide
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Move to previous slide
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Start auto sliding
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

// Stop auto sliding
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Initialize
showSlide(current);
startAutoSlide();
