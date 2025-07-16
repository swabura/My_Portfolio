document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-links a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  // Typewriter Effect
  const typewriterText = document.querySelector(".typewriter-text");
  const professions = ["Web Developer", "Designer", "Freelancer", "Programmer"];
  let currentProfession = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;

  function typeWriter() {
    const fullText = professions[currentProfession];

    if (isDeleting) {
      typewriterText.textContent = fullText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterText.textContent = fullText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }

    if (!isDeleting && charIndex === fullText.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentProfession = (currentProfession + 1) % professions.length;
      typingSpeed = 500; // Pause before typing next
    }

    setTimeout(typeWriter, typingSpeed);
  }

  // Start the typewriter effect after a short delay
  setTimeout(typeWriter, 1000);
});
