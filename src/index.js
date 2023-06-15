const catPlayer = document.getElementsByClassName("cat");

document.body.addEventListener("keyup", function (e) {
  if (e.key === " " ||
    e.code === "Space" ||
    e.keyCode === 32
  ) {
    catPlayer[0].classList.add("cat-jump");
    setTimeout(() => {
      catPlayer[0].classList.remove("cat-jump");
    }, 1000);
  }
});
const cat = document.getElementById("cat");

function catjump() {
  cat.classList.add("catjump");
}
document.addEventListener("keydown", function (event)) {
  catjump();
}