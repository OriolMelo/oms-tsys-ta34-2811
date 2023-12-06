"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej3 = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
const Television_1 = require("./Television");
const Lavadora_1 = require("./Lavadora");
let e1 = new Electrodomestico_1.Electrodomestico();
let e2 = new Electrodomestico_1.Electrodomestico(400);
let e3 = new Electrodomestico_1.Electrodomestico(130, "NEGRO", 'T', 600);
let t1 = new Television_1.Television();
let t2 = new Television_1.Television(700);
let t3 = new Television_1.Television(450, "azul", 'C', 23, 40, true);
let t4 = new Television_1.Television();
let l1 = new Lavadora_1.Lavadora();
let l2 = new Lavadora_1.Lavadora(120, 30);
let l3 = new Lavadora_1.Lavadora(70, 300, "Gris", 'A', 10);
let electrodomesticos = [e1, e2, e3, t1, t2, t3, t4, l1, l2, l3];
let precio_total = 0;
let precio_televisores = 0;
let precio_lavadoras = 0;
for (let i = 0; i < electrodomesticos.length; i++) {
    precio_total += electrodomesticos[i].precioFinal();
    if (electrodomesticos[i] instanceof Television_1.Television) {
        precio_televisores += electrodomesticos[i].precioFinal();
    }
    else if (electrodomesticos[i] instanceof Lavadora_1.Lavadora) {
        precio_lavadoras += electrodomesticos[i].precioFinal();
    }
}
function ej3() {
    console.log("Suma del precio de los televisores: " + precio_televisores);
    console.log("Suma del precio de las lavadoras: " + precio_lavadoras);
    console.log("Suma del precio de los electrodomésticos: " + precio_total);
}
exports.ej3 = ej3;
