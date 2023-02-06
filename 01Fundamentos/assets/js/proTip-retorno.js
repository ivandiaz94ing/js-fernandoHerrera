//Forma 1
// function crearPersona (nombre, apellido) {
//     return    { nombre: nombre,
//                    apellido: apellido}
// }
// let persona1 = crearPersona('Rafael', 'Diaz');
// console.log(persona1);


//FORMA 2
// function crearPersona(nombre, apellido){
//     return{nombre, apellido};
// }
// let persona2 = crearPersona('Marina', 'Rosso');
// console.log(persona2);


//FORMA 3
// const crearPersona = (nombre, apellido) => ({nombre, apellido});
// let persona3= crearPersona('Monica','Diaz');
// console.log(persona3);


function imprimirArgumentos (){
    console.log(arguments);
}
imprimirArgumentos('Ivan','Diaz',28,undefined,true,false);


let imprimirArgumentos2 = (...argume) =>{
return argume
} ;

imprimirArgumentos2('Ivan','Diaz',28,undefined,true,false);
const [nombre, apellido, edad, casado, estudiando, profesional] = imprimirArgumentos2('Ivan','Diaz',28,undefined,true,false);
console.log(nombre);