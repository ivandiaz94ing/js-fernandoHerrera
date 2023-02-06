let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },

    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Valledupar Colombia'
    },
    'ultima-pelicula': 'Iroman',

};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('N Trajes: ', personaje.trajes.length);
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Ultima Película:', personaje["ultima-pelicula"]);


//MAS DETALLES
console.log(personaje);
//Eliminar una propiedad del objeto
delete personaje.edad;
console.log(personaje);


//AGREGAR UNA NUEVA PROPIEDAD A UN OBJETO
personaje.casado = true;

const objetoArreglo = Object.entries(personaje);
console.log(objetoArreglo);

//BLOQUEAR MODIFICACION DE OBJETOS
Object.freeze(personaje);
personaje.dinero = 1000000;
personaje.casado = false;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);
