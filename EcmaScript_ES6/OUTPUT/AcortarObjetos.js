"use strict";

var CrearObjeto = function CrearObjeto(Nombre, Edad) {
  return {
    Nombre: Nombre,
    Edad: Edad,
    MostrarInfo: function MostrarInfo() {
      return "".concat(Nombre, " Tiene ").concat(Edad, " A\xF1os");
    }
  };
};

console.log(CrearObjeto('Fernando', 18).MostrarInfo());