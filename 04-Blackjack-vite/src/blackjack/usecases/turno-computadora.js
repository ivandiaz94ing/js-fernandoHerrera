//Turno de la computadora
import { pedirCarta} from "./";
import {acumularPuntos, determinarGanador, mostrarCarta  } from "./"
export const turnoComputadora = (puntosJugador, derk =[]) => {
    const turno = 1; 
    const puntosComputadora = 0;
    do {
        const carta = pedirCarta(derk);

        puntosComputadora = acumularPuntos(turno, carta);
        mostrarCarta(turno,carta)

    } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));
    
    determinarGanador(puntosJugador, puntosComputadora);
}