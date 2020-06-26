class Persona{
    constructor(Nombre, Edad){
        this.Nombre = Nombre;
        this.Edad = Edad;
    }
    MostrarInfo(){
        console.log(`${this.Nombre} Tiene ${this.Edad} Años`)
    }
}
/* export{Persona}; */
export default Persona;