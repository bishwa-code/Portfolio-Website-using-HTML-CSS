let typeData = new Typed(".animate-typing", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "UI/UX Designer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

function overlayNavbar() {
  let navIcon = document.getElementById("nav-icon");

  if (navIcon.classList.contains("fa-bars")) {
    navIcon.classList.remove("fa-bars");
    navIcon.classList.add("fa-xmark");
  } else {
    navIcon.classList.remove("fa-xmark");
    navIcon.classList.add("fa-bars");
  }
}
