//Funções de data e Hora

let agora  = new Date();
console.log(agora);
console.log(agora.toLocaleString());

// definição de um objeto da classe Date()
// para a variável agora

// Cálculo com Datas
let data1 = new Date("2025-01-23");
let data2 = new Date("2025-06-18");

let diferença = data2 - data1;

console.log(diferença/(1000*60*60*24)); // dias da diferença