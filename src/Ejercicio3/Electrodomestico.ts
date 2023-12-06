export class Electrodomestico {
    protected precio_base: number;
    protected color: string;
    protected consumo_energetico: string;
    protected peso: number;

    private readonly COLOR_BASE: string = "blanco";
    private readonly CONSUMO_BASE: string = 'F';


    constructor(precio_base: number = 100, color: string = "blanco", consumo_energetico: string =  "F", peso: number = 5) {
        this.precio_base = precio_base;
        this.color = color;
        this.consumo_energetico = this.comprobarConsumoEnergetico(consumo_energetico);
        this.peso = peso;
    }

    public getPrecio_base(): number {
        return this.precio_base;
    }

    public getColor(): string {
        return this.color;
    }

    public getConsumo_energetico(): string {
        return this.consumo_energetico;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPrecio_base(precio_base: number): void {
        this.precio_base = precio_base;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setConsumo_energetico(consumo_energetico: string): void {
        this.consumo_energetico = consumo_energetico;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public comprobarConsumoEnergetico(letra: string): string {
        if (letra < 'A' || letra > 'F') {
            letra = this.CONSUMO_BASE;
        }
        return letra;
    }

    public comprobarColor(color: string): string {
        const colores: string[] = ["blanco", "negro", "rojo", "azul", "gris"];
        let encontrado: boolean = false;
        let i: number = 0;
        while (i < colores.length && !encontrado) {
            if (color.toLowerCase() === colores[i]) {
                encontrado = true;
            } else {
                i++;
            }
        }
        if (!encontrado) {
            color = this.COLOR_BASE;
        }
        return color.toLowerCase();
    }
    
    public precioFinal():number{
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
        if (this.peso >= 0 && this.peso <= 19)
        {
            precio_final += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49)
        {
            precio_final += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79)
        {
            precio_final += 80;
        }
        else if (this.peso >= 80)
        {
            precio_final += 100;
        }
        return precio_final;
    }
}

