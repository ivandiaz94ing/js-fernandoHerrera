//Turno de la computadora
import { pedirCarta} from "./index";
import {acumularPuntos, determinarGanador, mostrarCarta  } from "./index"

/**
 * 
 * @param {Array} puntosJugadores Recibe el arreglo de los puntos de todos los jugadores
 * @param {Array} derk Recibe el arreglo con todas las cartas
 */
export const turnoComputadora = (puntosJugadores, derk =[]) => {
    do {
        const carta = pedirCarta(derk);

        puntosJugadores[1] = acumularPuntos(puntosJugadores, 1, carta);
        mostrarCarta(1,carta)

    } while ((puntosJugadores[1] < puntosJugadores[0]) && (puntosJugadores[0] <= 21));
    
    determinarGanador(puntosJugadores[0], puntosJugadores[1]);
}