const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageItems = document.querySelectorAll(".page-item");

function updateActivePage(newIndex) {
  document.querySelector(".page-item.active").classList.remove("active");
  pageItems[newIndex].classList.add("active");
}
