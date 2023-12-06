"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
class Electrodomestico {
    constructor(precio_base = 100, color = "blanco", consumo_energetico = "F", peso = 5) {
        this.COLOR_BASE = "blanco";
        this.CONSUMO_BASE = 'F';
        this.precio_base = precio_base;
        this.color = color;
        this.consumo_energetico = this.comprobarConsumoEnergetico(consumo_energetico);
        this.peso = peso;
    }
    getPrecio_base() {
        return this.precio_base;
    }
    getColor() {
        return this.color;
    }
    getConsumo_energetico() {
        return this.consumo_energetico;
    }
    getPeso() {
        return this.peso;
    }
    setPrecio_base(precio_base) {
        this.precio_base = precio_base;
    }
    setColor(color) {
        this.color = color;
    }
    setConsumo_energetico(consumo_energetico) {
        this.consumo_energetico = consumo_energetico;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    comprobarConsumoEnergetico(letra) {
        if (letra < 'A' || letra > 'F') {
            letra = this.CONSUMO_BASE;
        }
        return letra;
    }
    comprobarColor(color) {
        const colores = ["blanco", "negro", "rojo", "azul", "gris"];
        let encontrado = false;
        let i = 0;
        while (i < colores.length && !encontrado) {
            if (color.toLowerCase() === colores[i]) {
                encontrado = true;
            }
            else {
                i++;
            }
        }
        if (!encontrado) {
            color = this.COLOR_BASE;
        }
        return color.toLowerCase();
    }
    precioFinal() {
        let precio_final = this.precio_base;
        switch (this.consumo_energetico) {
            case 'A':
                precio_final += 100;
                break;
            case 'B':
                precio_final += 80;
                break;
            case 'C':
                precio_final += 60;
                break;
            case 'D':
                precio_final += 50;
                break;
            case 'E':
                precio_final += 30;
                break;
            case 'F':
                precio_final += 10;
                break;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            precio_final += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precio_final += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precio_final += 80;
        }
        else if (this.peso >= 80) {
            precio_final += 100;
        }
        return precio_final;
    }
}
exports.Electrodomestico = Electrodomestico;
