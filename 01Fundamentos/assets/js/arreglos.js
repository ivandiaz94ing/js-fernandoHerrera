const arr = new Array(10);
console.log(arr);

const arre = [];
console.log(arre);

let animales = ['Pato', 'Caballo', 'Vaca', 'Gallina', 'Asno', 'Perro', 'Gato'];
console.log(animales[5]);
console.log({animales});


//ARREGLOS DE VARIOS TIPOS DE DATOS
let arregloCosas = [
    true,
    12345,
    'Ivan',
    3+5-1,
    function miFuncion(){},
    () => {},
    {nombre: 'Arturo'},
    ['X', 'Megaman', 'Zero', 'Dr. Ligth'],
];

console.log({arregloCosas});
console.log(arregloCosas[7][3]);