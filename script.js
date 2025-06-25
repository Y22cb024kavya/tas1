// Simple interactivity for demonstration
document.querySelectorAll("nav ul li").forEach(item => {
  item.addEventListener("click", () => {
    alert(`Navigating to ${item.textContent}`);
  });
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // change every 4 seconds
