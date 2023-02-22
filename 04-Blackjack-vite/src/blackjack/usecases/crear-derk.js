import _ from 'underscore';
  //Esta Funcion crea un nuevo derk
 export const crearDeck = (tipos, letras) => {
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
  