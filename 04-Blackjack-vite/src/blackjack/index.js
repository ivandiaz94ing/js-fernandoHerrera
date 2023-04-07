
import _ from 'underscore';
import {crearDeck} from './usecases/crear-derk';
//import cualquierNombreDeExportar from './usecases/crear-derk'

//Crear alias a una funcion
//import {crearDeck as crearNuevoDerk } from './usecases/crear-derk';

//Patrón Módulo
//forma 1
const miJuego = (() => {
  'use strict'
  let derk = [];
  const tipos = ['C', 'D', 'H', 'S'],
            letras = ['J', 'Q', 'K', 'A'];

  let puntosJugadores = [];

  //REFERENCIAS HTML
  const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');


  let divCartas = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

  //Esta Funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2 ) => {
 // derk = cualquierNombreDeExportar(tipos, letras);
  derk = crearDeck(tipos, letras);
  console.log(`N Jugadores: ${numJugadores}`);
  puntosJugadores = [];

  for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

  btnPedir.disabled = false;
  btnDetener.disabled = false;
  console.clear();
      
  puntosHTML.forEach(elem => elem.innerText = 0);
  divCartas.forEach(elem => elem.innerText = ['']);
  }


  //Esta funcion me permite tomar una nueva carta
 


  const valorCarta = (carta) => {
      const valor = carta.substring(0, carta.length - 1);

      return (!isNaN(valor)) ? valor * 1 :
          valor === 'A' ? 14 :
              valor === 'K' ? 13 :
                  valor === 'Q' ? 12 : 11;
  }


  const acumularPuntos = (turno, carta) => {
      console.log(`Turno: ${turno}`);
      puntosJugadores[turno] += valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }


  const mostrarCarta = (jugador, carta) => {
          const imaCarta = document.createElement('img');
          imaCarta.src = `assets/cartas/${carta}.png`;
          imaCarta.classList.add('carta');
          divCartas[jugador].append(imaCarta);
  }

  //DETERMINAR GANADOR
  const determinarGanador = () => {
      setTimeout(() => {

          if (puntosJugadores[0] > 21) {
              alert('Ganó la Computadora');
          } else if ((puntosJugadores[1] < puntosJugadores[0]) || (puntosJugadores[1] > 21)) {
              alert('Genial Ganaste');
          } else if (puntosJugadores[1] > puntosJugadores[0]) {
              alert('Ganó la Computadora');

          } else {
              alert('Wauooo Excelente Guerreros hay un empate');

          }
      }, 500);
  }

  //Turno de la computadora
  const turnoComputadora = () => {
      do {
          const carta = pedirCarta();
          acumularPuntos((puntosJugadores.length -1 ), carta);
          mostrarCarta(puntosJugadores.length -1,carta)

      } while ((puntosJugadores[1] < puntosJugadores[0]) && (puntosJugadores[0] <= 21));
      
      determinarGanador();
  }

  //Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta();
      const puntosJugador = acumularPuntos(0, carta)

      mostrarCarta(0, carta);

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
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora();
  });

  //NUEVO JUEGO
  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  //Haciendo publico la funcion de nuevoJuego
  return {
      nuevoJuego : inicializarJuego 

  };
})();