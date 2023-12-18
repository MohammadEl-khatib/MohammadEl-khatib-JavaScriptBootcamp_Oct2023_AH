import { VirtualPet } from "../src/pet";

export class Cat extends VirtualPet {
    color: string;

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }

    getAttitude(): string {
        return this.getSatisfaction() > 0 ? "inquisitive" : "grumpy";
    }

    describe(): string {
        return `${super.describe()}, Color: ${this.color}, Attitude: ${this.getAttitude()}`;
    }
}
