  //DETERMINAR GANADOR
  /**
   * 
   * @param {Number} puntosJugador 
   * @param {Number} puntosComputadora 
   */
  export const determinarGanador = ( puntosJugador, puntosComputadora) => {
    setTimeout(() => {

        if (puntosJugador > 21) {
            alert('Ganó la Computadora');
        } else if ((puntosComputadora < puntosJugador ) || (puntosComputadora > 21)) {
            alert('Genial Ganaste');
        } else if (puntosComputadora> puntosJugador) {
            alert('Ganó la Computadora');
        } else {
            alert('Wauooo Excelente Guerreros hay un empate');
        }
    }, 500);
}
