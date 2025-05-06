// Slide-in animation on scroll
const sections = document.querySelectorAll(".section");

const onScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
