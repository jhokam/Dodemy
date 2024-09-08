// To highlight nav link when active
function highlightActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (
      section.offsetTop <= window.scrollY + 100 &&
      section.offsetTop + section.offsetHeight > window.scrollY
    ) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

// Trigger highlight function
window.addEventListener("load", highlightActiveLink);
window.addEventListener("scroll", highlightActiveLink);

// FAQ dropdown
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
