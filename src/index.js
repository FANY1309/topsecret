const cat = document.getElementById("cat");
const obstacle = document.getElementById("obstacle");

function catJump() {
  if (cat.classList != "jump") {
    cat.classList.add("jump");

    setTimeout(function () {
      cat.classList.remove("jump");
    }, 500);
  }
}

const isAlive = setInterval(function () {
  // get current cat Y position
  const catBottom = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));

  // get current obstacle X position
  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  // detect collision
  if (obstacleLeft < 179 && obstacleLeft > 0 && catBottom >= 200) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  catJump();
});
