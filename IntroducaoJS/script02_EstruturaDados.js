// Estruturas de Dados

// Condicionais (If Else ; Switch Case)

var precoProduto = 150;

if (precoProduto>=100) {
    console.log("Valor a Pagar: "
        +(precoProduto*0.9));
} else {
    console.log("Valor a Pagar: "
        +(precoProduto));
}

//switch case
var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Outro Mês");
        break;
}

// Estrura de repetição (For ; While)

//for(ponto de Início; ponto de parada; incremento)
for (let i = 0; i < 10; i++) {
    console.log ("Índice: "+i);
}

//while (condição de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas=0;
while (continuar) {
    let numeroSorteado = 
        Math.round(Math.random()*10);
    if (numeroEscolhido==numeroSorteado) {
        continuar = false
    }
    tentativas++;
    console.log("Nº de Tentativas : "
        +tentativas);
}

//funçoes (métodos)

function saudacao(nome) {
    return "Olá, " + nome + "!!!";
}

console.log(saudacao("Diogo"));


