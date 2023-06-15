const cat = document.getElementById("cat");
const obstacle = document.getElementById("obstacle");

function catJump() {
  if (cat.classList != "catJump") {
    cat.classList.add("catJump");

    setTimeout(function () {
      cat.classList.remove("catJump");
    }, 300);
  }
}

// const isAlive = setInterval(function () {
//   // get current cat Y position
//   const catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));

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

document.addEventListener("keydown", function (event) {
  catJump();
});
