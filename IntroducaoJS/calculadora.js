var prompt = require("prompt-sync")();

//calculadora simples

//funções
//soma
function soma(a,b){
    return (a+b);
}

//sub
function sub(a,b){
    return (a-b);
}

//multi
function multi(a,b){
    return (a*b);
}

//div
function div(a,b){
    return (a/b);
}

function menu(){
    console.log ("Escolha a Operação Desejada")
    console.log("1. soma");
    console.log("2. subtração");
    console.log("3. multiplicação");
    console.log("4. divisão");

    let operacao = Number(prompt());
    switch (operacao) {
        case 1:
            var a = Number(prompt("Informe o 1º nº"));
            var b = Number(prompt("Informe o 2º nº"));
            console.log(soma(a,b));
            break;
        case 2:
            var a = Number(prompt("Informe o 1º nº"));
            var b = Number(prompt("Informe o 2º nº"));
            console.log(sub(a,b));
            break;
        case 3:
            var a = Number(prompt("Informe o 1º nº"));
            var b = Number(prompt("Informe o 2º nº"));
            console.log(multi(a,b));
            break;
        case 4:
            var a = Number(prompt("Informe o 1º nº"));
            var b = Number(prompt("Informe o 2º nº"));
            if (b==0) {
                console.log("Não Dividirás por Zero")
            } else {
                console.log(div(a,b));
            }
            break;
        default:
            console.log("Operação Inválida")
            break;
    }
}

menu();