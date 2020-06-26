const nombres = ['Alan', 'Moises', 'Javier', 'Vanesa'];
/* const numero_caracter = nombres.map(function(nombres){
    console.log(`${nombres} tiene ${nombres.length} letras`);
}); */

const numero_caracter = nombres.map( nombres => `${nombres} tiene ${nombres.length} letras`);

/* const numero_caracter = nombres.map(function(nombres){
    return `${nombres} tiene ${nombres.length} letras`;
}); */

console.log(numero_caracter);

/*  flecha
{parametro} => {
    return //codigo ejecutable
} */