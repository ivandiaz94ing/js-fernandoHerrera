
let derk = [];
const tipos = ['C', 'D', 'H', 'S'];
const letras = ['J', 'Q', 'K', 'A'];
let puntosJugador = 0;
let puntosComputador = 0;


//REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');
const cartaEstatica = document.querySelector('#carta1')
let divCartaJug = document.querySelector('#jugador-cartas');
const divCartaComputadora = document.querySelector('#computadora-cartas')
const cartas = document.querySelectorAll('.carta');

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {

        for (let tipo of tipos) {
            derk.push(i + tipo);
        }
    }

    for (let letra of letras) {

        for (let tipo of tipos) {
            derk.push(letra + tipo);
        }

    }

    // console.log(derk);
    derk = _.shuffle(derk);
    //console.log(derk);
    //console.log(derk.length);
    return derk;
}
crearDeck();

//Esta funcion me permite tomar una nueva carta
const pedirCarta = () => {
    if (derk.length === 0) {
        throw 'No hay cartas'
    }

    const carta = derk.pop();
    return carta;
}

//pedirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    //console.log(valor, typeof(valor));

    return (!isNaN(valor)) ? valor * 1 :
        valor === 'A' ? 14 :
            valor === 'K' ? 13 :
                valor === 'Q' ? 12 : 11;
}

//Turno de la computadora
const turnoComputadora = () => {
    do {
        const carta = pedirCarta();

        puntosComputador += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputador;

        const imaCarta = document.createElement('img');
        imaCarta.src = `assets/cartas/${carta}.png`;
        imaCarta.classList.add('carta');
        divCartaComputadora.append(imaCarta);
        if (puntosJugador > 21) {
            break;
        }


    } while ((puntosComputador < puntosJugador) && (puntosJugador <= 21) );

    setTimeout(() => {


        if (puntosJugador > 21) {
            alert('Ganó la Computadora');
            console.log('Ganó la Computadora');
        } else if ((puntosComputador < puntosJugador) || (puntosComputador > 21)) {
            alert('Genial Ganaste');
            console.log('Genial Ganaste');
        } else {
            console.log('Wauooo Excelente Guerreros hay un empate');
            alert('Wauooo Excelente Guerreros hay un empate');

        }
    }, 300);
}



//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imaCarta = document.createElement('img');
    imaCarta.src = `assets/cartas/${carta}.png`;
    imaCarta.classList.add('carta');
    divCartaJug.append(imaCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento, Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();

    } else if (puntosJugador === 21) {
        console.warn('21, Genial!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora();

    }



});


//EVENTO DETENER
btnDetener.addEventListener('click', () =>{
btnPedir.disabled = true;
btnDetener.disabled = true;
turnoComputadora();
});

//NUEVO JUEGO
btnNuevo.addEventListener('click', ()=>{
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    console.clear();

    puntosComputador = 0;
    puntosJugador = 0;
    puntosHTML[0].innerText= 0;
    puntosHTML[1].innerText = 0;

    divCartaComputadora.innerHTML = '';
    divCartaJug.innerHTML = '';
    crearDeck();

});