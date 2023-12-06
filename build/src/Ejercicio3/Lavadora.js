"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lavadora = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
class Lavadora extends Electrodomestico_1.Electrodomestico {
    constructor(carga = 5, precio_base = 100, color = "blanco", consumo_energetico = "F", peso = 5) {
        super(precio_base, color, consumo_energetico, peso);
        this.CARGA_BASE = 5;
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    setCarga(carga) {
        this.carga = carga;
    }
    precioFinal() {
        let precio_final = super.precioFinal();
        if (this.carga > 50) {
            return precio_final += 50;
        }
        else {
            return precio_final;
        }
    }
}
exports.Lavadora = Lavadora;
