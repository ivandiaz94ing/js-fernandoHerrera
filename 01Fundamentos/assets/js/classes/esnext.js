

class Rectangulo {
    #area = 0;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 20);
rectangulo.area = 50;
console.log('Area =', rectangulo.area, 'metros');