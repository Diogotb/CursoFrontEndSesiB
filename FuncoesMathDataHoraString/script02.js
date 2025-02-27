// Funções de String(Texto)

var texto = "Aula de JavaScript";
console.log(texto.length); // contar o nº de caracteres

console.log(texto.toUpperCase()); //TUDO MAIÚSCULO
console.log(texto.toLowerCase()); // tudo minúsculo

//manipulação de texto
console.log(texto.substring(0,4)); // Aula 
console.log(texto.slice(-10)); //JavaScript
console.log(texto.replace("JavaScript" , "TypeScript"));

// split ( usar um caracter em comum para separa em um vetor)

let linguagens = "JavaScript, C++, Python, Java, PHP";
let arrayLinguagens =linguagens.split(", ");
console.log(arrayLinguagens);  

// Trim (tesoura)
let tesoura = "  JavaScript  ";
console.log(tesoura);
console.log(tesoura.trim());