document.addEventListener("DOMContentLoaded", () => {
  const cat = document.getElementById("#cat");
  // const alert = document.getElementById("#GameOver");
  // const obstacle = document.getElementById("#obstacle");
  // let isJumping = false;
  // const isGameOver = false;

  function keyInit(e) {
    if (e.keyCode === 32) {
      catJump();
      // if (!isJumping) {
      //   // isJumping = true;

      // }
    }
  }
  document.addEventListener("keydown", keyInit);
  /* Con esta función queremos que nuestro gato salte 550px pero como una animación,
no queremos que el gato vaya de A a B. Queremos que el gato salte progresivamente de a pocos píxeles,
de 30 en 30 px hasta llegar a 550px, hasta alcanzar su punto máximo. Para ello,
se crea la variable "timerId". Esta variable recogerá que nuestro gato saltará 30px cada X cantidad
de milisegundos hasta que "timerId" esté finalizado (que haya llegado a 550px) */

  function catJump() {
    // position es el bottom definido del gato, es decir, 200.
    const timerId = setInterval(function () {
      const position = 0;
      // Con esta parte del código queremos que nuestro gato vuelva al bottom cuando llegue a 550px
      if (position === 150) {
        clearInterval(timerId);
        console.log("down");
        const downTimerId = setInterval(function () {
          if (position === 0) {
            clearInterval(downTimerId);
            // isJumping = false;
          }
          position -= 20;
          cat.style.bottom = position + "px";
        }, 10);
      }

      // Con esta parte del código hacemos que el gato suba de 30 en 30 píxeles en 10ms.
      console.log("up");
      position += 20;
      cat.style.bottom = position + "px";
      console.log(cat.style.bottom);
    }, 10); // 10 son los milisegundos
  }

  //   function generateObstacles() {
  //     let obstaclePosition = 2560;
  //     const randomTime = Math.random * 4000;
  //     obstacle.style.left = obstaclePosition + "px";

  //     const timerId = setInterval(function () {
  //       if (obstaclePosition > 0 && obstaclePosition < 176 && position < 134) {
  //         clearInterval(timerId);
  //         alert.innerHTML = "Game Over";
  //         isGameOver = true;
  //       }

//       obstaclePosition -= 10;
//       obstacle.style.left = obstaclePosition + "px";
//     }, 10);
//     if (!isGameOver) setTimeout(generateObstacles, randomTime);
//   }
//   generateObstacles();
});

/* >>>>>TO DO LIST<<<<<<

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
