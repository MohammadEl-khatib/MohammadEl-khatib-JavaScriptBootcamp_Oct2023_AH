"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePet = exports.decay = void 0;
const cat_1 = require("./cat");
const dog_1 = require("./dog");
const pet_1 = require("./pet");
function decay(pet) {
    pet.hunger = Math.min(100, pet.hunger + 5);
    pet.happiness = Math.max(0, pet.happiness - 5);
}
exports.decay = decay;
function makePet(name, type) {
    if (type === "dog") {
        return new dog_1.Dog(name);
    }
    else if (type === "cat") {
        return new cat_1.Cat(name, "black");
    }
    else {
        return new pet_1.VirtualPet(name);
    }
}
exports.makePet = makePet;
