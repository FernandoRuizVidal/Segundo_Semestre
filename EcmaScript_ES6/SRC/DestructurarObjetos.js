const Usuario = {
    Nombre: 'Fernando',
    Correo: 'fernando2002@correo.com',
    Edad: 18,
    Pais: 'Mexico',
    Profesion: 'Estudiante'
}
const {Nombre, Profesion} = Usuario;
const mostrarInfo = ({Nombre, Profesion}) => console.log(`${Nombre} es ${Profesion}`);
mostrarInfo(Usuario);
/* console.log(); */