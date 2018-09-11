declare function require(name: string) : any;
var input = require('readline-sync');

import {Carro} from './Carro';

let carro1 : Carro = new Carro(0, 0, 0);
var op : string = " "; 

while(op != "Sair"){
    console.log("Escolha uma das opções: \n 1 - Ver Carro \n 2 - Embarcar \n 3 - Desembarcar \n 4 - Abastecer \n 5 - Andar");
    op = input.question();
    if(op == "1"){
        console.log(carro1.toString());
    } if(op == "2"){
        console.log("Passageiro embarcado");
        carro1.embarcar();
    } if(op == "3"){
        console.log("Passageiro desembarcado");
        carro1.desembarcar();
    } if(op == "4"){
        var perg: number = Number(input.question("Quanto litros de gasolina?"));
        carro1.abastecer(perg);
    } if(op == "5"){
        var perg: number = Number(input.question("Qual a distância?"));
        carro1.andar(perg);
    }
}