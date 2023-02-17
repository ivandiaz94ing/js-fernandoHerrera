class Singleton{
    static instancia;

    constructor(nombre = '') {
        
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}
const instancia = new Singleton('Spiderman');
console.log(instancia.nombre);

const instancia1 = new Singleton('Gardfield');
console.log(instancia1.nombre);