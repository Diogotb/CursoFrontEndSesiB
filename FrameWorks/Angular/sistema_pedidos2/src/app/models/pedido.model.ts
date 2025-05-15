import { Cliente } from './cliente.model';

export interface ItemPedido {
  produtoId: number;
  quantidade: number;
}

export class Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public itens: ItemPedido[],
    public desconto: number
  ) {}

  calcularTotal(produtos: any[]): number {
    const total = this.itens.reduce((acc, item) => {
      const prod = produtos.find((p) => p.id === item.produtoId);
      return acc + (prod ? prod.preco * item.quantidade : 0);
    }, 0);
    return total - total * (this.desconto / 100);
  }
}
