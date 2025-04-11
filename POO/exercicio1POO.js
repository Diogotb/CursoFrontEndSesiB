class Produto{
    //construtor- atributos
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque
    }

    //métodos
    vender(quantidade){
        if(quantidade>this.estoque){
            console.log("Quantidade solicitada maior que a Quantidade em Estoque");
            console.log("Quantidade em estoque é ", this.estoque);
            return
        }
        this.estoque -= quantidade;
        console.log("Venda realizada com sucesso");
    }

    repor(quantidade){
        this.estoque += quantidade;
        console.log ("Quantidade em estoque = ", this.estoque);
    }

    exibirInfo(){
        console.log(this.nome," preço: ",this.preco,", quantidade em estoque: ",this.estoque);
    }
}

let p1 = new Produto("Martelo",15,10);
p1.vender(15);
p1.vender(5);
p1.repor(10);
p1.exibirInfo();