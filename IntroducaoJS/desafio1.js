var prompt = require("prompt-sync")();

var idade = Number(prompt("Digite Sua Idade: "));

//if encadeado
if (idade<18) {
    console.log("Menor de Idade");
} else if(idade<60){ //condição intermediário
    console.log("Adulto");
} else{
    console.log("Idoso");
}