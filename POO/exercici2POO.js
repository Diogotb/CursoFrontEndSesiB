class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Veículo: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.quantidadePortas}`);
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2022, 4);
carro1.exibirInfo();
