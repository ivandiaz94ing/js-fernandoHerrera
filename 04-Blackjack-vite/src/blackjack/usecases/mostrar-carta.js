
let divCartas = document.querySelectorAll('.divCartas');

/**
 * 
 * @param {Number} jugador Este es el turno del jugador
 * @param {String} carta Ejemplo 10, AH, KD
 */

export const mostrarCarta = (jugador, carta) => {
    const imaCarta = document.createElement('img');
    imaCarta.src = `assets/cartas/${carta}.png`;
    imaCarta.classList.add('carta');
    divCartas[jugador].append(imaCarta);
}