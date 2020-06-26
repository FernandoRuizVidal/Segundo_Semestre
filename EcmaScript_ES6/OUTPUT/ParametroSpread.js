"use strict";

var MostrarDatos = function MostrarDatos() {
  for (var _len = arguments.length, Datos = new Array(_len), _key = 0; _key < _len; _key++) {
    Datos[_key] = arguments[_key];
  }

  console.log(Datos);
};

var ArregloDatos = ['Fernando ', 18, 'correo@correo.com', 'Mexico'];
MostrarDatos.apply(void 0, ArregloDatos);