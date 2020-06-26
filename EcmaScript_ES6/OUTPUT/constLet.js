/*  Caracteristica-01 */

/* C pude redeclarar variables con var */

/* Esto causa prblemas sin darnos cuenta */

/* var nombre = 'Sanada';
var nombre = 'Fernando';

const pais = 'Mexico';
const pais = 'España';

console.log(':3 Hello :3 ' + nombre); */

/* Caracteristica-02 */

/*  let y const tambien tienen un scope en el que no podeos acceder a las variables creadas dentro de una funcion */

/* function saludo() {
    let nombre = 'Fernando'
    return 'Hola ' + nombre;
}
console.log(saludo())
console.log(nombre); */

/* Caracteristeca-03 */

/* let y const tienen un scope de tipo bloque */

/* let edad = 18;

if (edad = 18) {
    const esAdulto = true;
    
}
console.log(esAdulto); */

/* Caracteristica-04 */

/* lo usamos cuando queremos que el valor de una variable nunca cambie */

/* let nombre = 'Fernando';
nombre = 'Sanada'
console.log (nombre); */

/* const colores = ['Rojo', 'Verde'];
colores.push('Azul');
console.log(colores); */
"use strict";