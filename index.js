const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const pageItems = document.querySelectorAll(".page-item");

function updateActivePage(newIndex) {
  document.querySelector(".page-item.active").classList.remove("active");

  pageItems[newIndex].classList.add("active");
}

pageItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateActivePage(index);
  });
});

nextBtn.addEventListener("click", () => {
  const currentActive = document.querySelector(".page-item.active");

  const currentIndex = Array.from(pageItems).indexOf(currentActive);

  if (currentIndex < pageItems.length - 1) {
    updateActivePage(currentIndex + 1);
  }
});

prevBtn.addEventListener("click", () => {
  const currentActive = document.querySelector(".page-item.active");

  const currentIndex = Array.from(pageItems).indexOf(currentActive);

  if (currentIndex > 0) {
    updateActivePage(currentIndex - 1);
  }
});
