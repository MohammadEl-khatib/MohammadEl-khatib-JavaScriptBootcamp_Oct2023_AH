"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualPet = void 0;
class VirtualPet {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.happiness = 50;
    }
    describe() {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
    }
    getSatisfaction() {
        return this.happiness - this.hunger;
    }
    makeSound(sound) {
        return `${this.name} says ${sound}`;
    }
    feed() {
        this.hunger = Math.max(0, this.hunger - 10);
    }
    play() {
        this.happiness = Math.min(100, this.happiness + 10);
    }
}
exports.VirtualPet = VirtualPet;
