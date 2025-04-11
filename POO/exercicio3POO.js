class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
    }

    exibirSaldo() {
        console.log(`Titular: ${this.titular}, Saldo: R$${this.saldo}`);
    }
}

let conta1 = new ContaBancaria("Carlos");
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirSaldo();
