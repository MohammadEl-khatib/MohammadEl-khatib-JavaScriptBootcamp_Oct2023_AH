export class VirtualPet {
    name: string;
    hunger: number;
    happiness: number;

    constructor(name: string) {
        this.name = name;
        this.hunger = 50;
        this.happiness = 50;
    }

    describe(): string {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
    }

    getSatisfaction(): number {
        return this.happiness - this.hunger;
    }

    makeSound(sound: string): string {
        return `${this.name} says ${sound}`;
    }

    feed(): void {
        this.hunger = Math.max(0, this.hunger - 10);
    }

    play(): void {
        this.happiness = Math.min(100, this.happiness + 10);
    }
}

