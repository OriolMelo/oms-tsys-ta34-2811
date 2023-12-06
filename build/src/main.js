"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Ejercicio1/Persona");
const Password_1 = require("./Ejercicio2/Password");
const mainApp_1 = require("./Ejercicio3/mainApp");
//1
(0, Persona_1.ej1)();
//2
let contra = new Password_1.Password(16);
console.log(contra);
//3
(0, mainApp_1.ej3)();
