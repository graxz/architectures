import { Cliente } from "./cliente";

export class ClienteEmail {
  constructor(private cliente: Cliente) {}

  envioRemocaoConta(): boolean {
    console.log("Envio do email de remoção de conta de " + this.cliente.nome);
    return true;
  }
}
