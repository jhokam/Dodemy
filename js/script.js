function highlightActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (
      section.offsetTop <= window.scrollY + 100 &&
      section.offsetTop + section.offsetHeight > window.scrollY
    ) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

window.addEventListener('load', highlightActiveLink);
window.addEventListener('scroll', highlightActiveLink);