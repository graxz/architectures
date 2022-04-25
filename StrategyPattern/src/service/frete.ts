import { Fedex } from "./shipping/fedex";
import { Correios } from "./shipping/correios";

interface FreteServico {
  priceCalculator(peso: number): void;
}

class SedexService implements FreteServico {
  priceCalculator(peso: number): void {
    const correios = new Correios();

    //Vai logar o valor
    correios.priceCalculator(peso);
  }
}

class FedexService implements FreteServico {
  priceCalculator(peso: number): void {
    const fedex = new Fedex();

    //Vai logar o valor
    fedex.priceCalculator(peso);
  }
}

export class Frete {
  private servico: FreteServico;

  constructor(servico: FreteServico) {
    this.servico = servico;
  }

  setServico(servico: FreteServico) {
    this.servico = servico;
  }

  priceCalculator(peso: number) {
    const valorTotal = this.servico.priceCalculator(peso);

    return valorTotal;
  }
}
