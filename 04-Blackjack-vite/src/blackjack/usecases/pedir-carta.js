
/**
 * Esta funcion permite tomar una carta
 * @param {Array <String>} derk  Es un arreglo de string
 * @returns { <String>} retorna la ultima carta del derk
 */
export const pedirCarta = (derk) => {
    if (!derk || derk.length === 0) {
        throw 'No hay cartas'
    }
    return derk.pop();
}