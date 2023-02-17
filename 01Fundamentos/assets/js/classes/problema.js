const iba = {
    nombre: 'Ivan',
    edad    : 28,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - Edad : ${this.edad}`);
    }
}
const isa = {
    nombre: 'Isabel',
    edad    : 14,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - Edad : ${this.edad}`);
    }
}

iba.imprimir();
isa.imprimir();

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad : ${this.edad}`);
    }
}

const marina = new Persona('Marina',68);
const monica = new Persona('Monica',34);

marina.imprimir();
monica.imprimir();