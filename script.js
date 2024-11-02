const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navButton = document.getElementsByClassName("nav-button")[0];

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navButton.classList.toggle("active");
});
