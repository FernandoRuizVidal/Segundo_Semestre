"use strict";

var nombres = ['Alan', 'Moises', 'Javier', 'Vanesa'];
/* const numero_caracter = nombres.map(function(nombres){
    console.log(`${nombres} tiene ${nombres.length} letras`);
}); */

var numero_caracter = nombres.map(function (nombres) {
  return "".concat(nombres, " tiene ").concat(nombres.length, " letras");
});
/* const numero_caracter = nombres.map(function(nombres){
    return `${nombres} tiene ${nombres.length} letras`;
}); */

console.log(numero_caracter);
/*  flecha
{parametro} => {
    return //codigo ejecutable
} */