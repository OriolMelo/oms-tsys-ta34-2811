"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(longitud = 8) {
        this.caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        this.longitud = longitud;
        this.password = this.generarPassword();
    }
    generarPassword() {
        let contra = "";
        for (let i = 0; i < this.longitud; i++) {
            contra = contra.concat(this.caracteres.charAt(this.generarAleatorio(0, this.caracteres.length - 1)));
        }
        return contra;
    }
    generarAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.Password = Password;
