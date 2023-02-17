class  Persona {
    
    static porObjeto ({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo (){
        console.log(`${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const persona1 = new Persona('Ivan', 'Diaz', 'Colombia');
persona1.getInfo();

const padre = {
    nombre : 'Rafael',
    apellido : 'Diaz',
    pais       : 'Colombia'
}

const persona2 = Persona.porObjeto(padre);
persona2.getInfo();