"use strict";

/* const MostrarDatos = (Nombre, Edad, Correo, Pais) =>{ */

/* console.log(Nombre, Edad, Correo, Pais); */
var MostrarDatos = function MostrarDatos() {
  for (var _len = arguments.length, Datos = new Array(_len), _key = 0; _key < _len; _key++) {
    Datos[_key] = arguments[_key];
  }

  console.log(Datos);
};

MostrarDatos('Fernando ', 18, 'correo@correo.com', 'Mexico');