
import breakingBadBg from './images/breaking_bad.jpg';
const burgerToggle = document.querySelector('.burger-toggle');
const nav = document.querySelector('.nav-links');
burgerToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burgerToggle.classList.toggle('active');
});

// Set background image for hero section
document.querySelector('.hero').style.backgroundImage = `url(${breakingBadBg})`;