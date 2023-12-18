import { VirtualPet } from "./pet";

export class Dog extends VirtualPet{
  play(): void {
    this.happiness = Math.min(100, this.happiness + 15);
  }  
}