import { Electrodomestico } from "./Electrodomestico";
import { Television } from "./Television";
import { Lavadora } from "./Lavadora";


let e1 = new Electrodomestico();
let e2 = new Electrodomestico(400);
let e3 = new Electrodomestico(130, "NEGRO", 'T', 600);
let t1 = new Television();
let t2 = new Television(700);
let t3 = new Television(450, "azul", 'C', 23, 40, true);
let t4 = new Television();
let l1 = new Lavadora();
let l2 = new Lavadora(120, 30);
let l3 = new Lavadora(70, 300, "Gris", 'A', 10);

let electrodomesticos: Electrodomestico[] = [e1, e2, e3, t1, t2, t3, t4, l1, l2, l3];

let precio_total = 0;
let precio_televisores = 0;
let precio_lavadoras = 0;
for (let i = 0; i < electrodomesticos.length; i++) {
    precio_total += electrodomesticos[i].precioFinal();
    if (electrodomesticos[i] instanceof Television) {
        precio_televisores += electrodomesticos[i].precioFinal();
    } else if (electrodomesticos[i] instanceof Lavadora) {
        precio_lavadoras += electrodomesticos[i].precioFinal();
    }
}

export function ej3(){
    console.log("Suma del precio de los televisores: " + precio_televisores);
    console.log("Suma del precio de las lavadoras: " + precio_lavadoras);
    console.log("Suma del precio de los electrodomésticos: " + precio_total);
}