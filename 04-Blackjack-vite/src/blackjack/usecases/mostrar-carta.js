
export const mostrarCarta = (jugador, carta) => {
    const imaCarta = document.createElement('img');
    imaCarta.src = `assets/cartas/${carta}.png`;
    imaCarta.classList.add('carta');
    divCartas[jugador].append(imaCarta);
}