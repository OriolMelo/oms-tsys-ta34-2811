"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej1 = exports.Persona = void 0;
class Persona {
    constructor(dni, nombre = "", edad = 0, sexo = 'H', peso = 0, altura = 0) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
exports.Persona = Persona;
let yo = new Persona("12345678A");
let tu = new Persona("12345679A", "Al", 12);
let el = new Persona("12346578B", "Min", 53, 'M', 60, 175);
function ej1() {
    console.log(yo);
    console.log(tu);
    console.log(el);
}
exports.ej1 = ej1;
