"use strict";

var Texto = 'Hello World';
console.log(Texto, 'Empieza Con A', Texto.toLowerCase().startsWith('A'));
console.log(Texto, 'Termina Con A', Texto.toLowerCase().endsWith('A'));
console.log(Texto, 'Incluye Mi Nombre?', Texto.includes('Fernando'));
var Amigos = ['Braulio', 'Vanesa', 'Lady', 'Ana', 'Oscar'];
console.log(Amigos.includes('David'));
console.log(Amigos.find(function (Amigo) {
  return Amigo.length > 6;
}));
console.log(Amigos.find(function (Amigo) {
  return Amigo === 'Lady';
}));
console.log(Amigos.findIndex(function (Amigo) {
  return Amigo === 'Vanesa';
}));