import { Cliente } from "../models/cliente";
import { ClienteAvatar } from "../models/clienteAvatar";
import { ClienteDocumentos } from "../models/clienteDocumentos";
import { ClienteEmail } from "../models/clienteEmail";
import { ClienteService } from "../models/clienteService";

export module Facade {
  export class ClienteFacade {
    static removeConta(cliente: Cliente) {
      const clienteAvatar = new ClienteAvatar(cliente);
      const clienteDocumentos = new ClienteDocumentos(cliente);
      const clienteService = new ClienteService(cliente);
      const clienteEmail = new ClienteEmail(cliente);

      clienteAvatar.remove();
      clienteDocumentos.delete();
      clienteService.delete();
      clienteEmail.envioRemocaoConta();
    }
  }
}
