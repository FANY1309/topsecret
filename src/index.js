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

// const obstacle = document.querySelector("obstacle");
// const catTop = parseInt(window.getComputedStyle(catPlayer[0]).getPropertyValue("bottom"));
// setInterval(function () {
//   console.log(catTop);
// }, 1000 / 60);

// let requestAnimationFrame = window.requestAnimationFrame ||
//                             window.mozRequestAnimationFrame ||
//                             window.webkitRequestAnimationFrame ||
//                             window.msRequestAnimationFrame;

// requestAnimationFrame(updateValue);

// function updateValue() {
//     let imageTopPosition = getComputedStyle(image).top;
//     textField.textContent = imageTopPosition;

//     requestAnimationFrame(updateValue);

// const isAlive = setInterval(function () {
//   // get current cat Y position
// const catTop = parseInt(window.getComputedStyle(catPlayer).getPropertyValue("bottom"));
//   // get current obstacle X position
//   const obstacleLeft = parseInt(
//     window.getComputedStyle(obstacle).getPropertyValue("left")
//   );

//   // detect collision
//   if (obstacleLeft < 50 && obstacleLeft > 0 && catTop >= 590) {
//     // collision
//     alert("Game Over!");
//   }
// }, 10);
