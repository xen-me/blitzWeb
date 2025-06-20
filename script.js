// script.js
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu-container");

  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("visible");
  });

  let isOpen = false;
dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  isOpen = !isOpen;
  menu.classList.toggle("visible", isOpen);
});


  // Optional: close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-wrapper")) {
      menu.classList.remove("visible");
    }
  });
});
