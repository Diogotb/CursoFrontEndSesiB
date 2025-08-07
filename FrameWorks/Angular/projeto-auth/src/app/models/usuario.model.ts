export class Usuario{
  id?: number; //opcional - gerado pelo Json-server
  nome: string;
  email: string;
  senha: string;
  dataCriacao?: Date; // adicionado pelo servidor

  constructor(nome:string, email:string, senha:string){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
