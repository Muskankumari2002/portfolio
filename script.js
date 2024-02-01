
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle navigation for small screens
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('nav ul');
  
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  
    // Form validation
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  });
  
  // script.js

const worksImages = [
  "/img/img 11.jpeg",
  "/img/img 12.jpeg",
  "/img/img 13.jpeg",
  "/img/img 14.jpeg",
  "/img/img 15.jpeg",
  "/img/img 16.jpeg",
  // Add more image URLs as needed
];

let currentWorkIndex = 0;

function changeWorkImage() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  galleryItems.forEach((item, index) => {
    item.src = worksImages[(currentWorkIndex + index) % worksImages.length];
  });
}

// Call the function to change images initially
changeWorkImage();
// script.js

// ... (previous code)

// Change images every 5 seconds (adjust the time as needed)
setInterval(() => {
  currentWorkIndex = (currentWorkIndex + 1) % worksImages.length;
  changeWorkImage();
}, 5000); // 5000 milliseconds = 5 seconds

function toggleFullContent() {
  var fullContent = document.getElementById("fullContent");
  var readMoreBtn = document.getElementById("readMoreBtn");

  // Toggle the visibility of the full content
  if (fullContent.style.display === "none" || fullContent.style.display === "") {
    fullContent.style.display = "block";
    readMoreBtn.innerHTML = "Read Less";
  } else {
    fullContent.style.display = "none";
    readMoreBtn.innerHTML = "Read More";
  }
}

