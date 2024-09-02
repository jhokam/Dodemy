let hero = document.querySelector("#hero");
let features = document.querySelector("#features");

const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionID = current.getAttribute("id");
    console.log(sectionID);

    if (scrollY > sectionTop && sectionHeight <= sectionTop + sectionHeight) {
      // console.log(document.querySelector('li a[href*="' + sectionID + '"]'))
      document
        .querySelector('li a[href="' + sectionID + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('li a[href="' + sectionID + '"]')
        .classList.remove("active");
    }
  });
});