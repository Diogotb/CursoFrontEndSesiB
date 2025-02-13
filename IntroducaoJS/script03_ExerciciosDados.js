var prompt = require("prompt-sync")();
// Exercicio 1 - Par Impar
var numero = Number(prompt("Informe um Número:"));

if ((numero%2)==0) {
    console.log("O nº é Par");
} else{
    console.log("O nº é Ímpar");
}

//exercicio 2 - laço For

for (let i = 1; i <= 100; i++){
    console.log(i);  
}



