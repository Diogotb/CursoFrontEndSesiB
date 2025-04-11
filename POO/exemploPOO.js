let produto = {
    nome: "Notebook",
    preco: 3000,
    desconto: function(){return this.preco*0.1}  
} //coleção (chave/valor)

let produto2 = {
    nome: "Caixa de som",
    preco: 1000,
    desconto: function(){return this.preco*0.1}  
} //coleção (chave/valor)

console.log(produto.nome, " desconto: ", produto.desconto());

//em POO
class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }  
    desconto (){
        return this.preco*0.1;
    }
}

let p1 = new Produto("Celular",2000);
let p2 = new Produto("Mouse Gamer", 200);
console.log(p1.nome, " desconto: ",p1.desconto());

//exemplo de encapsulamento
class Usuario{
    //atributos
    #nome;
    #id;
    #senha;
    constructor(nome, senha, id){
        this.#nome = nome;
        this.#senha = senha;
        this.#id = id;
    }

    //método get
    getNome(){
        return this.#nome;
    }
 
}

let user = new Usuario("João", "123456", "a01");
console.log(user.nome); //vai dar erro não pode chamar pelo atributo privado
console.log(user.getNome()); 

//herança 

class Pessoa{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
    exibirInfo(){
        console.log("Nome: ", this.nome, ", CPF: ", this.cpf);
    }
}

class Aluno extends Pessoa{
    constructor(nome, cpf, matricula){
        super(nome, cpf);
        this.matricula = matricula;
    }
}

let aluno1 = new Aluno("Maria", 123,"RM123456");
aluno1.exibirInfo();