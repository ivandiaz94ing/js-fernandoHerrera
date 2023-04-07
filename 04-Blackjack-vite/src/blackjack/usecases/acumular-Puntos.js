import { valorCarta } from "./valor-carta";
export const acumularPuntos = (turno, carta) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
