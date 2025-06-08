
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

});



const cards = document.querySelectorAll('.new-card');

cards.forEach((card) => {
  const extra = card.querySelector('.extra-card');

  card.addEventListener('mouseenter', () => {
    extra.style.transform = 'translate(-50%, -50%) scale(1.1)';
    extra.style.opacity = '1';
    extra.style.pointerEvents = 'auto';
  });

  card.addEventListener('mouseleave', () => {
    extra.style.transform = 'translate(-50%, 150%) scale(0)';
    extra.style.opacity = '0';
    extra.style.pointerEvents = 'none';
  });
});
