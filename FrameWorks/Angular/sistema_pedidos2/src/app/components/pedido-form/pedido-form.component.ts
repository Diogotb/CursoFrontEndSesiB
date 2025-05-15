import { Component} from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Produto } from 'src/app/models/produto.model';
import { Pedido, ItemPedido } from 'src/app/models/pedido.model';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
})
export class PedidoFormComponent {
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  clienteId = '';
  desconto = 0;
  itens: ItemPedido[] = [];

  constructor(private dadosService: DadosService) {}


  salvarPedido() {
    const cliente = this.clientes.find(
      (c) => c.id.toString() === this.clienteId
    );
    if (!cliente) return;

    const itensSelecionados = this.itens.filter((i) => i.quantidade > 0);
    const pedido = new Pedido(
      Date.now(),
      cliente,
      itensSelecionados,
      this.desconto
    );
    this.dadosService.adicionarPedido(pedido);

    this.clienteId = '';
    this.desconto = 0;
    this.itens.forEach((i) => (i.quantidade = 0));
  }
}
