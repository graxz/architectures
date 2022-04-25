import { Cliente } from "./src/models/cliente";
import { Facade } from "./src/facade/clienteFacade";

const isaddora = new Cliente(
  "Isaddora Freitas",
  "isaddoraFreitas",
  "isaddorafreitasar@gmail.com"
);

Facade.ClienteFacade.removeConta(isaddora);
