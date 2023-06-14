const time = new Date();
const deltaTime = 0;

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(Init, 1);
} else {
  document.addEventListener("DOMContentLoaded, Init");
}
function Init() {
  time = new Date();
  Start();
  Loop();
}

function Loop() {
  deltaTime = (new Date()) - time / 1000;
  time = new Date();
  Update();
  requestAnimationFrame(Loop);
}

/*
GAME LOOP // Bucle del juego.
Las siguientes líneas inicializarán el juego cuando todas las imágenes se hayan cargado
y programan la función UPDATE para que se llame de 30 a 60 veces por segundo

Guardamos en variables los OBJETOS que vamos a querer animar y también algunas propiedades
que va a tener nuestro juego: como la posición del suelo o la velocidad con la que
se mueven los cactus.

Fuera de las funciones, creamos una variable por cada objeto que vamos a utilizar. De este modo, serán accesibles desde
cualquier parte de nuestro código.
*/

const floorY = 22;
let speedY = 0;
const impulse = 900;
const gravity = 2500;

const catPosX = 42;
let catPosY = sueloY;

let floorX = 0;
const speedStage = 1280;
const gameSpeed = 1;
const score = 0;

const stopped = false;
let jumping = false;

let timeUntilObstacle = 2;
const timeObstacleMin = 0.7;
const timeObstacleMax = 1.8;
const obstaclePosY = 16;
const obstacle = [];

let container;
let cat;
let textScore;
let floor;
let gameOver;

function Start() {
  gameOver = document.querySelector(".game-over");
  floor = document.querySelector(".floor");
  container = document.querySelector(".container");
  textScore = document.querySelector(".score");
  cat = document.querySelector(".cat");
  document.addEventListener("click", HandletKeyDown);
}

/*
    keyCode 32 es la barra espaciadora del teclado
    */
// function HandletKeyDown(ev) {
//   if (ev.keyCode == 32) {
//     Jump();
//   }
// }

// function Jump() {
//   if (catPosY === floorY) {
//     jumping = true;
//     speedY = impulse;
//     cat.classList.remove("cat");
//   }
// }

/* Con la función UPDATE vamos a mover el escenario un poquito para que los
obstáculos avancen sobre el CAT y así parezca que CAT está corriendo, cuando
en realidad es el FONDO el que se mueve.
*/
function Update() {
  MoveFloor();
  MoveCat();
  DecideToCreateObstacles();
  MoveObstacles();

  speedY -= gravity * deltaTime;
}

/* CalculateScrolling atiende al desplazamiento del suelo */
function MoveFloor() {
  floorX += CalculateScrolling();
  floor.classList.add("floor") = -(floorX % container.ClientWidth) + "px";
}

function CalculateScrolling() {
  return speedStage * deltaTime * gameSpeed;
}

function MoveCat() {
  catPosY += speedY * deltaTime;

  if (catPosY < floorY) {
    TouchFloor();
  }
  cat.classList.add("cat") = catPosY + "px";
}

function TouchFloor() {
  catPosY = floorY;
  speedY = 0;
  if (jumping) {
    cat.classList.add("cat");
  }
  jumping = false;
}

function DecideToCreateObstacles() {
  timeUntilObstacle -= deltaTime;
  if (timeUntilObstacle <= 0) {
    CreateObstacle();
  }
}

/* Aquí se añadirían los obstáculos, donde va "cactus" */
function CreateObstacle() {
  const obstacle = document.createElement("div");
  container.appendChild(obstacle);
  obstacle.classList.add("cactus");
  obstacle.posX = container.ClientWidth;
  obstacle.style.left = container.ClientWidth + "px";

  obstacle.push(obstacle);
  timeUntilObstacle = timeObstacleMin + Math.random() * (timeObstacleMax - timeObstacleMin) / gameSpeed;
}

function MoveObstacles() {
  for (let i = obstacle.length - 1; i >= 0; i--) {
    if (obstacle[i].posX < -obstacle[i].ClientWidth) {
      obstacle[i].parentNode.removeChild(obstacle[i]);
      obstacle.splice[i];
      WinScore();
    } else {
      obstacle[i].posX -= CalculateScrolling();
      obstacle[i].style.left = obstacle[i].posX + "px";
    }
  }
}

// function WinScore() {
//   score++;
//   textScore.innerText = score;
// }
