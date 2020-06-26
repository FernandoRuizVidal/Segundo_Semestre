/* const MostrarDatos = (Nombre, Edad, Correo, Pais) =>{ */
    /* console.log(Nombre, Edad, Correo, Pais); */
    const MostrarDatos = (...Datos) =>{
    console.log(Datos);
}
MostrarDatos('Fernando ', 18 ,'correo@correo.com', 'Mexico');