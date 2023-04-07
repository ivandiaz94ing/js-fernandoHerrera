
import _ from 'underscore';
import {crearDeck, pedirCarta, acumularPuntos, turnoComputadora, mostrarCarta} from './usecases/index';

//Patrón Módulo

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

  //Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(derk);
      const puntosJugador = acumularPuntos(puntosJugadores ,0, carta)

      mostrarCarta(0, carta);

      if (puntosJugador > 21) {
          console.warn('Lo siento, Perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores,derk);

      } else if (puntosJugador === 21) {
          console.warn('21, Genial!!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;

          turnoComputadora(puntosJugadores,derk);
      }
  });

  //EVENTO DETENER
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores, derk);
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