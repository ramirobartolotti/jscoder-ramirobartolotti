//juego adivina el num de la primer entrega

// //inicio programa
// const min = 1;
// const max = 10;

// //array con las variables posibles
// const numeros = [];
// for (let i = min; i <= max; i++) {
//     numeros.push(i);
// }

// //eleccion de num aleatorio del array
// const randomIndex = Math.floor(Math.random() * numeros.length);
// const numeroRandom = numeros[randomIndex];

// //pido al usuario que eliga el num
// let userGuess = parseInt(prompt(`Adivina el número entre ${min} y ${max}:`));

// //vemos si el num ingresado es correcto
// if (userGuess === numeroRandom) {
//     alert('¡Felicidades! Adivinaste el número.');
// } else {
//     alert(`Lo siento, el número correcto era ${numeroRandom}.`);
// }

// //preguntamos si quiere jugar de nuevo
// const jugarOtravez = confirm('¿Quieres jugar de nuevo?');

// if (jugarOtravez) {
//     //si quiere jugar denuevo refrescamos la pagina
//     location.reload();
// } else {
//     //sino quiere jugar de nuevo lo despedimos
//     alert('Gracias por jugar. ¡Hasta luego!');
// }


