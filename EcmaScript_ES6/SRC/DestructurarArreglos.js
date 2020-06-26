const Persona = ['Fernando', 18 , 'Mexico', 'Programador Web'];
const [Nombre, Edad, Pais, Profesion] = Persona;

/* console.log(Profesion); */
/* console.log(persona[3]); */
/* 4 */
/* const mostrarInfo = (Persona) =>  {
    console.log(Persona[2]);
}
mostrarInfo(Persona); */
const mostrarInfo = ([Nombre, , Pais] = Persona ) => console.log(Nombre, Pais);
mostrarInfo(Persona);