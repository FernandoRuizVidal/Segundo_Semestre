alert('Hello')
class Usuario{
    constructor(Nombre, Edad, Correo){
        this.Nombre = Nombre,
        this.Edad = Edad,
        this.Correo = Correo
    }
    mostrarSaludo(Mensaje){
        return Mensaje;
    }
    mostrarInfo(){
        return `
        Nombre: ${this.Nombre} <br/>
        Edad: ${this.Edad} <br/>
        Correo: ${this.Correo} <br/>
        <hr/>
        `;
    }
}
const Fernando = new Usuario('Fernando', 18, 'correo@correo.com');
document.write(Fernando.mostrarInfo());

const Sanada = new Usuario('Sanada', 10, 'correo@falso.com');
document.write(Sanada.mostrarInfo());

class Aprendiz extends Usuario{
    constructor(Nombre, Edad, Correo, Carrera, Matricula){
        super(Nombre, Edad, Correo);
        this.Carrera = Carrera;
        this.Matricula = Matricula;
    }
    mostrarInfo(){
        return `
        Nombre: ${this.Nombre} <br/>
        Edad: ${this.Edad} <br/>
        Correo: ${this.Correo} <br/>
        Carrera: ${this.Carrera} <br/>
        Matricula: ${this.Matricula} <br/>
        <hr/>
        `;
    }
}

const Yukimura = new Aprendiz('Yukimura', 20, 'correoBatAss@falso.com','Ing. Sisteas', 123456);
document.write(Yukimura.mostrarInfo());