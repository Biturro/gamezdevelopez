//bienvenida y creacion de variable volverJugar para reiniciar el juego
alert(
  `Bienvenido al juego del pitoniso, deberas adivinar un numero del 1 al 100 para demostrar tus poderes, recuerda que tienes solo 4 intentos, si te atreves pincha en el maestro pitoniso.`
);

function pitoniso() {
  let volverJugar = true;

  //bucle para reiniciar el juego, creo numero aleatorio y el numero propuesto por el jugador
  while (volverJugar) {
    const numeroAleatorio = parseInt(Math.random() * 100 + 1);
    console.log(numeroAleatorio);
    let numeroPropuesto = prompt(
      `¿Cual es el numero en el que estoy pensando entre el 1 y el 100?.`
    );

    //bucle del juego
    for (let intento = 3; intento >= 0; intento--) {
      if (numeroPropuesto === null) {
        alert("No te des por vencido pitoniso");
        break;
      } else if (
        isNaN(numeroPropuesto) ||
        numeroPropuesto < 1 ||
        numeroPropuesto > 100
      ) {
        intento++;
        numeroPropuesto = prompt(
          `No has introducido un numero entre el 1 y el 100, intentalo de nuevo. Te quedan ${intento} intentos.`
        );
        console.log(intento);
      } else if (numeroAleatorio == numeroPropuesto) {
        alert("Felicidades eres un autentico pitoniso.");
        break;
      } else if (intento === 0) {
        alert(
          `Has perdido el juego, el numero en el que estaba pensando era el ${numeroAleatorio}.`
        );
        break;
      } else if (numeroPropuesto > numeroAleatorio) {
        if (intento === 2) {
          alert(`Una pista, el numero acaba en  ${numeroAleatorio % 10}.`);
        }
        numeroPropuesto = prompt(
          `Di un numero mas bajo, te quedan ${intento} intentos.`
        );
        console.log(intento);
      } else if (numeroPropuesto < numeroAleatorio) {
        if (intento === 2) {
          alert(`Una pista, el numero acaba en  ${numeroAleatorio % 10}.`);
        }
        numeroPropuesto = prompt(
          `Di un numero mas alto, te quedan ${intento} intentos.`
        );
        console.log(intento);
      }
    }
    //reinicio del juego.
    volverJugar = confirm("¿Quieres volver a jugar?.");
  }
}
