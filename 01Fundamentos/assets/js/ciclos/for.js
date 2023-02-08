const plantas = ['Guasimo','Carreto','Guayacan','Trupillo','Guacamayo','Corazon Fino','Toco'];
console.warn('For Tradicional');

for (let i = 0; i < plantas.length; i++) {
    console.log(plantas[i]);
    
}

console.warn('For In');
for (const index in plantas) {
    console.log(plantas[index]);
}

console.warn('For Of');
for (planta of plantas) {
    console.log(`${planta}`);
}