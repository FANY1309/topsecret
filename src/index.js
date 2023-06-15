const catPlayer = document.getElementsByClassName("cat");
const cactus = document.getElementsByClassName("floor-cactus");

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

// setInterval(function () {
//   const catbottom = parseInt(window.getComputedStyle(catPlayer).getPropertyValue("bottom"));

//   const cactusLeft = parseInt(
//     window.getComputedStyle(".floor-cactus").getPropertyValue("left")
//   );

//   if (cactusLeft <  && cactusLeft > 134 && catbottom >= 195) {
//     alert("Game Over!");
//   }
// }, 10);
