import { Frete } from "./service/frete";
import { Correios } from "./service/shipping/correios";

const sedex = new Correios();
const frete = new Frete(sedex);

const calculaFrete = frete.priceCalculator(10);

console.log(calculaFrete);
