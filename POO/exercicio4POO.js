class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        this.salario += this.salario * (percentual / 100);
        console.log(`Salário de ${this.nome} aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
    }

    exibirInfo() {
        console.log(`Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`);
    }
}

let funcionario1 = new Funcionario("Mariana", 3000, "Desenvolvedora");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
