


class Persona {
   // nombre =  '';
    //codigo   =  '';
    //frase      =  '';
    static conteo = 0;

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this._codigo = codigo;
        this.frase = frase;

        Persona.conteo += 1; 

    }

}

const spiderman = new Persona('Peter Parkert', 'Spiderman','Soy tu amigable vecino Spiderman');
const iroman = new Persona('Tony Stark', 'Ironman','Soy tu  Ironman');

console.log(spiderman);
console.log(iroman);
console.log('Instacias: ',Persona.conteo);
Persona.propiedadEstaticaExterna = 'Hola soy una propiedad estatica tambien ';

console.log(Persona.propiedadEstaticaExterna);
console.log({Persona});