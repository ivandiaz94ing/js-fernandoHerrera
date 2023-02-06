let juegos = ['Halo', 'San Andrea', 'Medalla de Honor', 'PES', 'Black', 'Dragon Ballz', 'Motocross'];
console.log({Tamanio: juegos.length});

let primero = juegos[0];
let ultimo = juegos[(juegos.length-1)];
console.log(primero, ',', ultimo);

juegos.forEach((elemento,  indice, arr)  =>{
    console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push('FIFA');
console.log(nuevaLongitud, juegos);

// AGREGAR UN ELEMENTO AL INICIO DEL ARREGLOS
nuevaLongitud = juegos.unshift('Los Vaqueros');
console.log(nuevaLongitud, juegos);


let juegosBorrado = juegos.pop();
console.log(juegosBorrado, juegos);

//ELIMINAR UNOS ELEMENTOS DEL ARREGLO
let pos =1;
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados);

console.log(juegos);
let indice = juegos.indexOf('PES');
console.log('PES: ', indice);