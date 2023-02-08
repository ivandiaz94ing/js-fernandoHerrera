// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }
const elMayor = (a, b) => (a > b) ? a : b;

console.log(`El numero mayor es: ${elMayor(25,20)}`);

const nota = 65.5;
const grado = nota >= 95 ? 'A+' :
                       nota >= 90 ? 'A'   :
                       nota >= 85 ? 'B+' :
                       nota >= 80 ? 'B'   :
                       nota >= 75 ? 'C+' :
                       nota >= 70 ? 'C'   :
                       'F';

console.log({nota, grado});