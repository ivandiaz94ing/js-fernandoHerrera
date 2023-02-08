//console.log('Hola ');
//Valor
let a = 10;
let b = a;
a = 30;
console.log({a});
console.log({b});

//Referencia

const juan = {nombre: 'Juan'};
const pedro = {...juan};
pedro.nombre = 'Pedro';

console.log(juan);
console.log(pedro);


const cambiaNombre = ( { ...persona } ) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre(peter);

console.log({ peter,  tony } );


//Arreglos
const frutas = ['Peras', 'Manzana', 'Piña'];
console.time('spread')
const otrasFrutas  = [...frutas];
console.timeEnd('spread')

console.time('slice')
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice')


otrasFrutas.push('Sandia');

console.table({frutas, otrasFrutas, otrasFrutas2});