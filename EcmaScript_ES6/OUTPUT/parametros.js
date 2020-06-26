"use strict";

function RegistrarUsuario(nombre, pais, correo, telefono) {
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(RegistrarUsuario('Max', 'Mexico', 'max@correo.net', '12567890'));