let fecha = new Date();

let dia = fecha.getDay();
dia = 8;
console.log( typeof(dia) );

diaLetra = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diaLetra[dia] || 'El numero maximo es el 6');

diaObjetos = { 
    0: 'Domingo', 
    1: 'Lunes', 
    2: 'Martes', 
    3: 'Miercoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sabado', 
}
console.log(diaObjetos[dia] || 'Dia no definido');