export function initScrollReveal() {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
  });

  // Observe all elements with reveal class
  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

// Add reveal class to sections
export function addRevealClass() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("reveal");
  });

  // Add to project cards individually for staggered effect
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${index * 0.1}s`;
  });
}
