//Operações Avançadas em Vetores (arrays)
let numeros = [10, 20, 30, 40, 50];

//map - Percorre e faz uma ação
let numerosNovos = numeros.map(x => x*3);
console.log(numerosNovos);

//filtros (filter) - Percorre e faz uma seleção
let numMaior20 = numeros.filter(x => x > 20);
console.log (numMaior20);

//reduce
let soma = numeros.reduce(
    (acumulador, valorAtual) =>
         acumulador + valorAtual,0);
console.log(soma); //150

//sort (organizador)

let aleatorio = [2, 5, 1, 3, 7,  8, 6, 9, 4, 0];
aleatorio.sort();
console.log(aleatorio);
