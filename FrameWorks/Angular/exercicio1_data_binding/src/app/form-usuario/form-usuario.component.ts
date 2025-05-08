import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  genero: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparCampos(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.genero = "";
    this.idade = null;
    this.profissao = "";
  }
  
}
