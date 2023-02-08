const retornaFalso = () => {
    console.log('Regresa Falso');
    return false;
}

const retornaVerdadero = () => {
    console.log('Regresa Verdadero');
    return true;
}

console.warn('Not o La Negacion');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!retornaFalso());

console.warn('PRO TIP DE LOGICA BOOLEANA');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';

const a2 = true && 'Hola mundo' && 150;

const a3 = soyFalso || 'Ya no soy falso';

const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso';

const a5 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso' || true;

const a6 = soyFalso || soyNull || retornaVerdadero() || 'Ya no soy falso';

console.log({a1, a2, a3, a4, a5, a6});




