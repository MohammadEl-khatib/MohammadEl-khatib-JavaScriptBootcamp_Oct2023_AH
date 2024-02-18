"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const pet_1 = require("./pet");
class Dog extends pet_1.VirtualPet {
    play() {
        this.happiness = Math.min(100, this.happiness + 15);
    }
}
exports.Dog = Dog;
