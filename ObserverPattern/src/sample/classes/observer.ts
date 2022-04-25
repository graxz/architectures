import IObserver from "../interfaces/IObserver";

export default class Observer implements IObserver {
  constructor(public readonly id: number) {}

  update(): void {
    console.log(`Observer ${this.id} has been updated`);
  }
}
