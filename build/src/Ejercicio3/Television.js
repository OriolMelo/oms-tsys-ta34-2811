"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Television = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
class Television extends Electrodomestico_1.Electrodomestico {
    constructor(precio_base = 100, color = "blanco", consumo_energetico = "F", peso = 5, resolucion = 20, _4k = false) {
        super(precio_base, color, consumo_energetico, peso);
        this.resolucion = resolucion;
        this._4k = _4k;
    }
    getResolucion() {
        return this.resolucion;
    }
    get4k() {
        return this._4k;
    }
    setResolucion(resolucion) {
        this.resolucion = resolucion;
    }
    set4k(_4k) {
        this._4k = _4k;
    }
    precioFinal() {
        let precio_final = super.precioFinal();
        if (this.resolucion >= 40) {
            precio_final += (this.precio_base * 0.3);
        }
        if (this._4k) {
            precio_final += 50;
        }
        return precio_final;
    }
}
exports.Television = Television;
