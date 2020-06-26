"use strict";

var Usuario = {
  Nombre: 'Fernando',
  Correo: 'fernando2002@correo.com',
  Edad: 18,
  Pais: 'Mexico',
  Profesion: 'Estudiante'
};
var Nombre = Usuario.Nombre,
    Profesion = Usuario.Profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var Nombre = _ref.Nombre,
      Profesion = _ref.Profesion;
  return console.log("".concat(Nombre, " es ").concat(Profesion));
};

mostrarInfo(Usuario);
/* console.log(); */