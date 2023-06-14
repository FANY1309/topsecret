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
