export class Carro{
	tanque: number;
	passageiros: number;
	km: number;

	constructor(tanque: number, passageiros: number, km: number){
		this.tanque = tanque;
		this.passageiros = passageiros;
		this.km = km;
	}

	embarcar() : boolean{
		if(this.passageiros >= 2) {
			return false;
		}else{
			this.passageiros +=1;
			return true;
		}
	}
	desembarcar() : boolean{
		if(this.passageiros > 0){
			this.passageiros -=1;
			return true;
		}else{
			return false;
		}
	}
	abastecer(litros : number) : void{/*parâmetros do métodos */
		this.tanque += litros;
		if(this.tanque > 10){
		this.tanque = 10;
		}
	}
	andar(distancia : number) : boolean{
		if(this.passageiros > 0){
			if(this.tanque > 0 && this.tanque >= distancia/10){
				this.km += distancia;
				this.tanque -= distancia/10;
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	toString(): string{
		let res: string = "";
		res += "Tanque: " + this.tanque + "\n";
		res += "Passageiros: " + this.passageiros + "\n";
		res += "Km: " + this.km + "\n";
		return res;
	}
}