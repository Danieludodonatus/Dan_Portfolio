const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav-list");
const OpenBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close");

OpenBtn.addEventListener("click", () => {
  OpenBtn.classList.add("hide");
  closeBtn.classList.remove("hide");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hide");
  OpenBtn.classList.remove("hide");
  overlay.classList.remove("show");
});

navList.addEventListener("click", () => {
  OpenBtn.classList.remove("hide");
  overlay.classList.remove("show");
});

const date = document.querySelector(".date");
const cuurentDate = new Date().getFullYear();
date.textContent = cuurentDate;

document.getElementById('myForm').addEventListener('submit', function(e) {
  // Let the form submit
  setTimeout(function() {
    // Manually clear each field
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  }, 100); // Delay to ensure submission occurs
});