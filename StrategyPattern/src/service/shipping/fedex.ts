export class Fedex {
  priceCalculator(weight: number): boolean {
    const amount = 4;
    console.log(`O preço do frete é ${amount} referente ao peso de ${weight}`);

    return true;
  }
}
