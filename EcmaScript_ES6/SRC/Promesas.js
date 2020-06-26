/* const Promesa = new Promise ((revolve, reject) =>{ */
/* accion a ejecutar */
const Promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        /* const exito = true; */
        const exito = false;
        if (exito) {
            resolve('La Operacion Tuvo Exito');
        } else {
            reject('La Operacion Fracaso');
        }
    }, 4000);
});
/* resolve(); */
Promesa.then((mensaje)=>{
    alert(mensaje);
});
/* reject(); */
Promesa.catch((mensaje)=>{
    alert(mensaje);
});