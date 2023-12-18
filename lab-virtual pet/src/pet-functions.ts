import { Cat } from "./cat";
import { Dog } from "./dog";
import { VirtualPet } from "./pet";


export function decay(pet: VirtualPet): void {
    pet.hunger = Math.min(100, pet.hunger + 5);
    pet.happiness = Math.max(0, pet.happiness - 5);
}

export function makePet(name: string, type: string): VirtualPet {
    if (type === "dog") {
        return new Dog(name);
    } else if (type === "cat") {
        return new Cat(name, "black");
    } else {
        return new VirtualPet(name);
    }
}
