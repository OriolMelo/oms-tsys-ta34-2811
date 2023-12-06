import { Electrodomestico } from "./Electrodomestico";
export class Television extends Electrodomestico {
    private resolucion: number;
    private _4k: boolean;

    constructor(precio_base: number = 100, color: string = "blanco", consumo_energetico: string =  "F", peso: number = 5, resolucion: number = 20, _4k: boolean = false) {
        super(precio_base, color, consumo_energetico, peso);
        this.resolucion = resolucion;
        this._4k = _4k;
    }

    public getResolucion(): number {
        return this.resolucion;
    }

    public get4k(): boolean {
        return this._4k;
    }

    public setResolucion(resolucion: number): void {
        this.resolucion = resolucion;
    }

    public set4k(_4k: boolean): void {
        this._4k = _4k;
    }

    public precioFinal(): number {
        let precio_final: number = super.precioFinal();

        if (this.resolucion >= 40) {
            precio_final += (this.precio_base * 0.3);
        }

        if (this._4k) {
            precio_final += 50;
        }

        return precio_final;
    }
}