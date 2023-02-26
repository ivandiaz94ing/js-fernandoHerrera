import _ from 'underscore';


/**
 * esta funcion crea un nuevo derk
 * @param {Array <String>} tipos Ejemplos: ['C', 'D', 'H', 'S']
 * @param {Array <String>} letras Ejemplos: ['J', 'Q', 'K', 'A']
 * @returns {Array <String>} retorna un nuevo derk de cartas
 */ 
export const crearDeck = (tipos, letras) => {
    if(!tipos || tipos.length ===0) 
        throw new Error ('Tipos de cartas es obligatorio como un arreglo de string');
    
        if(!letras || letras.length ===0) 
        throw new Error ('Letras de cartas es obligatorio como un arreglo de string');

    let derk = [ ];
        for (let i = 2; i <= 10; i++) {

            for (let tipo of tipos) {
                derk.push(i + tipo);
            }
        }
        for (let letra of letras) {

            for (let tipo of tipos) {
                derk.push(letra + tipo);
            }
        }
        return _.shuffle(derk);
        }
//export default crearDeck;