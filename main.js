let display = document.querySelector(".display");
let megaMenu = document.querySelector(".mega-menu");
let upScroll = document.querySelector(".up-scroll");
let state = false;
display.addEventListener("click", () => {
  if (state === false) {
    state = true;
    megaMenu.classList.add("show");
  } else {
    state = false;
    megaMenu.classList.remove("show");
  }
});

window.onscroll = function () {
  if (scrollY >= 1000) {
    upScroll.style.display = "block";
  }else{
    upScroll.style.display = "none";
  }
};
