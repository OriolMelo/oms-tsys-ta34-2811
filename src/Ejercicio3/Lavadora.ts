import { Electrodomestico } from "./Electrodomestico";
export class Lavadora extends Electrodomestico {
    private carga: number;
    private readonly CARGA_BASE: number = 5;

    constructor(carga: number = 5, precio_base: number = 100, color: string = "blanco", consumo_energetico: string =  "F", peso: number = 5) {
        super(precio_base, color, consumo_energetico, peso);
        this.carga = carga;
    }

    public getCarga(): number {
        return this.carga;
    }

    public setCarga(carga: number): void {
        this.carga = carga;
    }

    public precioFinal(): number {
        let precio_final: number = super.precioFinal();

        if (this.carga > 50) {
        return precio_final += 50;
        } else {
        return precio_final;
        }
    }
}