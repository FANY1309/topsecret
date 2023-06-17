const catPlayer = document.querySelector(".cat");
const mummy = document.querySelector(".obstacle");
const floor = document.querySelector(".floor");
const bg = document.querySelector(".background");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");

let playerScore = 0;
let interval = 0;

function catJump() {
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
      interval = setInterval(scoreCounter, 200);
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

  function endGame() {
    setInterval(() => {
      const mummyLeft = parseInt(getComputedStyle(mummy).getPropertyValue("left"));
      const catBottom = parseInt(getComputedStyle(catPlayer).getPropertyValue("bottom"));
      // detect collision
      if (mummyLeft <= 280 && mummyLeft >= 150 && catBottom <= 540) {
        // collision
        gameOver.style.display = "block";
        catPlayer.classList.remove("cat-running");
        mummy.classList.remove("obstacle-moving");
        bg.style.animation = "none";
        floor.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
      }
    }, 10);
  }
  endGame();
}

catJump();
