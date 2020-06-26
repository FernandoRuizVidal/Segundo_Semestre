"use strict";

/* const Promesa = new Promise ((revolve, reject) =>{ */

/* accion a ejecutar */
var Promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    /* const exito = true; */
    var exito = false;

    if (exito) {
      resolve('La Operacion Tuvo Exito');
    } else {
      reject('La Operacion Fracaso');
    }
  }, 4000);
});
/* resolve(); */

Promesa.then(function (mensaje) {
  alert(mensaje);
});
/* reject(); */

Promesa["catch"](function (mensaje) {
  alert(mensaje);
});