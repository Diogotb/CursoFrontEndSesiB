import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
})
export class PedidoListComponent {

  pedidos: Pedido[] = [];
  produtos: Produto[] = [];

  constructor(private dadosService: DadosService) {}


  calcularTotal(pedido: Pedido): number {
    return new Pedido(
      pedido.id,
      pedido.cliente,
      pedido.itens,
      pedido.desconto
    ).calcularTotal(this.produtos);
  }
}
