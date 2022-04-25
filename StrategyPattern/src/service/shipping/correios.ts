export class Correios {
  priceCalculator(weight: number): boolean {
    const amount = 6;
    console.log(`O preço do frete é ${amount} referente ao peso de ${weight}`);

    return true;
  }
}
