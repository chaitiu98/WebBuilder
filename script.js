/* ================= HAMBURGER & MOBILE NAV ================= */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');

// Toggle mobile nav
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  navOverlay.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close mobile nav on overlay click
navOverlay.addEventListener('click', () => {
  mobileNav.classList.remove('show');
  navOverlay.classList.remove('show');
  hamburger.classList.remove('active');
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    navOverlay.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

/* ================= GALLERY ================= */
const images = [
  "images/gal1.webp",
  "images/gal2.webp",
  "images/gal3.webp",
  "images/gal4.webp",
  "images/gal5.webp",
  "images/gal6.webp",
  "images/gal7.webp"
];

const current = document.getElementById("current");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.querySelector(".nav-btn.left");
const nextBtn = document.querySelector(".nav-btn.right");
let currentIndex = 0;

function updateGallery(index) {
  current.src = images[index];
  thumbs.forEach((t,i) => t.classList.toggle("active", i===index));

  // Update nav previews
  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;
  prevBtn.querySelector('.nav-bg').style.backgroundImage = `url(${images[prevIndex]})`;
  nextBtn.querySelector('.nav-bg').style.backgroundImage = `url(${images[nextIndex]})`;
}

// Initialize gallery
updateGallery(currentIndex);

// Thumbnail click
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    currentIndex = i;
    updateGallery(currentIndex);
  });
});

// Nav buttons click
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery(currentIndex);
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery(currentIndex);
});

/* ================= HERO PARALLAX ================= */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-img');
  if (parallax) parallax.style.transform = `translateY(-${scrolled * 0.3}px)`;
});

/* ================= ACCORDION ================= */
const accBtn = document.querySelector('.accordion-btn');
const accContent = document.querySelector('.accordion-content');

if (accBtn && accContent) {
  accBtn.addEventListener('click', () => {
    accContent.style.maxHeight = accContent.style.maxHeight ? null : accContent.scrollHeight + 'px';
  });
}

/* ================= HIGHLIGHT CURRENT DAY ================= */
const days = document.querySelectorAll('.day');
const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const todayName = dayNames[new Date().getDay()];

days.forEach(day => {
  if(day.dataset.day === todayName){
    day.classList.add('current');
  }
});

/* ================= MAP FUNCTIONS ================= */
function openDirections() {
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=3190+HW-160+Suite+F+Pahrump+NV+89048",
    "_blank"
  );
}

function zoomIn() {
  const map = document.getElementById("gmap");
  alert("Zoom in function requires Google Maps API integration");
}

function zoomOut() {
  const map = document.getElementById("gmap");
  alert("Zoom out function requires Google Maps API integration");
}

document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll('.animate-left, .animate-right');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  scrollElements.forEach(el => observer.observe(el));
});

