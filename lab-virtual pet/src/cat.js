"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const pet_1 = require("../src/pet");
class Cat extends pet_1.VirtualPet {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    getAttitude() {
        return this.getSatisfaction() > 0 ? "inquisitive" : "grumpy";
    }
    describe() {
        return `${super.describe()}, Color: ${this.color}, Attitude: ${this.getAttitude()}`;
    }
}
exports.Cat = Cat;
