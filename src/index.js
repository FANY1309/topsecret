// const cat = document.getElementById("cat");
// const obstacle = document.getElementById("obstacle");

// function catJump() {
//   if (cat.classList != "jump") {
//     cat.classList.add("jump");

//     setTimeout(function () {
//       cat.classList.remove("jump");
//     }, 1000);
//   }
// }

// setInterval(function () {
//   // get current cat Y position
//   const catBottom = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));

//   // get current obstacle X position
//   const obstacleLeft = parseInt(
//     window.getComputedStyle(obstacle).getPropertyValue("left")
//   );

//   // detect collision
//   if (obstacleLeft < 179 && obstacleLeft > 0 && catBottom >= 94) {
//     // collision
//     alert("Game Over!");
//   }
// }, 10);

// document.addEventListener("keydown", function (event) {
//   catJump();
// });
/*
>>>>>TO DO LIST<<<<<<

FUNCIÓN KEYINIT
Esta función asigna una tecla para iniciar el movimiento del juego.
Puede ser la misma tecla que para saltar.

FUNCIÓN INICIO
Esta función es la que arranca el juego. Esta función es importante porque cuando accedemos al juego,
tenemos que ver una imagen estática hasta que pulsemos un botón asignado.
La lógica sería:
- Al pulsar la tecla espacio arranca el juego:
  - El gato empieza a caminar.
  - El suelo empieza a moverse.
  - Los obstáculos aparecen por pantalla.
  - El fondo empieza a desplazarse
  - El score empieza a sumar

- Esta función acaba/frena cuando el gato choca contra una momia,
en ese momento aparece una alerta en pantalla que pone GAME OVER.

FUNCIÓN CATWALK
Esta función es la que inicia la animación del minino cuando pulsemos la tecla asignada.

FUNCIÓN FLOORMOVING
Esta función inicia la animación del suelo cuando se pulse la tecla asignada.

FUNCIÓN OBSTACLES
Esta función arranca el movimiento de los obstáculos cuando pulsemos la tecla asignada.

FUNCIÓN BACKMOVING
Esta función inicia la animación de las pirámides moviéndose.

FUNCIÓN SCORE
La puntuación inicial es 0.
Esta función registra UN punto en positivo (sobre lo que ya tenemos +=) cuando
el gato logra saltar con éxito una momia.

FUNCIÓN CATJUMP
Esta función sirve para activar la animación de saltar del gato.
Cuando se pulse la tecla asignada (la barra espaciadora, key 32) el gato va
desde su base (bottom) hasta su punto máximo asignado y regresa a bottom.
Cuando regresa a bottom, la función acaba.

FUNCIÓN GAME OVER
- Esta función sólo entraría en acción cuando el gato choque contra una momia.
Además,esta función es la encargada de frenar las animaciones mencionadas anteriormente.
En el momento del choque, saltará una ventana emergente que diga GAME OVER.
*/
