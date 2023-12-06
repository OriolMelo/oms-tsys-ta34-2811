export class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso: number;
    private altura: number;

    constructor(dni: string, nombre: string = "", edad: number = 0, sexo: string = 'H', peso: number = 0, altura: number = 0) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}

let yo = new Persona("12345678A");
let tu = new Persona("12345679A", "Al", 12);
let el = new Persona("12346578B", "Min", 53, 'M', 60, 175);

export function ej1(){
    console.log(yo);
    console.log(tu);
    console.log(el);
}