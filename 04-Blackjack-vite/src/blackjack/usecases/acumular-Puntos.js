import { valorCarta } from "./valor-carta";

let puntosHTML = document.querySelectorAll('small');
puntosHTML.forEach(elem => elem.innerText = 0);


/**
 * 
 * @param {Array} puntosJugadores Arreglo de los puntos de los jugadores
 * @param {Number} turno jugador al que se le va a sumar los puntos
 * @param {String} carta carta sacada por el jugador actual
 * @returns {Number} Retorna el arreglo actualizado con los puntos de los jugadores
 */
export const acumularPuntos = (puntosJugadores, turno, carta) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
