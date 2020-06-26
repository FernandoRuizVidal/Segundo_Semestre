const CrearObjeto = (Nombre, Edad) =>{
    return{
        Nombre,
        Edad,
        MostrarInfo(){
            return `${Nombre} Tiene ${Edad} Años`;
        }
    }
}
console.log(CrearObjeto('Fernando', 18).MostrarInfo());