export class Password{
    private longitud:number;
    private password:string;
	private caracteres:string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    constructor(longitud:number = 8){
        this.longitud=longitud;
        this.password=this.generarPassword();
    }
    
	private generarPassword():string{
		let contra:string = "";
		for(let i=0; i<this.longitud; i++) {
			contra=contra.concat(this.caracteres.charAt(this.generarAleatorio(0,this.caracteres.length-1)));
		}
		return contra;
	}

	private generarAleatorio(min:number,max:number):number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}