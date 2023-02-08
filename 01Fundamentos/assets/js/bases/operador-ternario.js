const dia = 5;
const horaActual = 12;

let horaApertura;
let mensaje; //Está abierto , Esta cerrado, hoy abrimos a las XX

// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;

// } else {
//     console.log('Dia normal');
//     horaApertura = 11;
// }
horaApertura = ([0,6].includes(dia)) ?  9 : 11;

// if (horaActual < horaApertura) {

//     console.log(`Esta cerrado, hoy abrimos a las ${horaApertura}`);

// } else {

//     console.log(`Esta abierto`);
// }

mensaje = (horaActual < horaApertura)?`Está cerrado, hoy abrimos a las ${horaApertura}`:'Esta abierto';
console.log({ horaApertura, mensaje});