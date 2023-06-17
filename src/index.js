const catPlayer = document.querySelector(".cat");
const mummy = document.querySelector(".obstacle");
const floor = document.querySelector(".floor");
const bg = document.querySelector(".background");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");

let playerScore = 0;

const scoreCounter = () => {
  playerScore++;
  score.innerHTML = `${playerScore}`;
};

document.addEventListener("keydown", (start) => {
  if (start.code === "Space") {
    gameOver.style.display = "none";
    catPlayer.classList.add("cat-running");
    mummy.classList.add("obstacle-moving");
    bg.style.animation = "animated-background 80s linear infinite";
    floor.style.animation = "animated-floor 18s linear infinite";
    playerScore = 0;
    setInterval(scoreCounter, 200);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e === TouchEvent) {
    if (catPlayer.classList !== "cat cat-jump") {
      catPlayer.classList.add("cat-jump");
    }
    setTimeout(() => {
      catPlayer.classList.remove("cat-jump");
    }, 700);
  }
});

// const obstacle = document.querySelector("floor-cactus");
// const isAlive = setInterval(function () {
//   // get current cat Y position
//   const catTop = parseInt(window.getComputedStyle(catPlayer).getPropertyValue("bottom"));

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
