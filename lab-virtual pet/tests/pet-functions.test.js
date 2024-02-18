"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("../src/cat");
const dog_1 = require("../src/dog");
const pet_1 = require("../src/pet");
const pet_functions_1 = require("../src/pet-functions");
describe('pet-functions', () => {
    describe('decay function', () => {
        it('adjusts hunger and happiness accordingly', () => {
            const pet = new pet_1.VirtualPet("Buddy");
            (0, pet_functions_1.decay)(pet);
            expect(pet.hunger).toBe(55);
            expect(pet.happiness).toBe(45);
        });
        it('does not let hunger go above 100', () => {
            const pet = new pet_1.VirtualPet("Buddy");
            pet.hunger = 98;
            (0, pet_functions_1.decay)(pet);
            expect(pet.hunger).toBe(100);
        });
        it('does not let happiness go below 0', () => {
            const pet = new pet_1.VirtualPet("Buddy");
            pet.happiness = 3;
            (0, pet_functions_1.decay)(pet);
            expect(pet.happiness).toBe(0);
        });
    });
    describe('makePet function', () => {
        it('returns a Dog for type dog', () => {
            const pet = (0, pet_functions_1.makePet)("Rover", "dog");
            expect(pet instanceof dog_1.Dog).toBeTruthy();
            expect(pet.name).toBe("Rover");
        });
        it('returns a Cat for type cat', () => {
            const pet = (0, pet_functions_1.makePet)("Whiskers", "cat");
            expect(pet instanceof cat_1.Cat).toBeTruthy();
            expect(pet.name).toBe("Whiskers");
        });
        it('returns a VirtualPet for other types', () => {
            const pet = (0, pet_functions_1.makePet)("Buddy", "turtle");
            expect(pet instanceof pet_1.VirtualPet).toBeTruthy();
            expect(pet.name).toBe("Buddy");
        });
    });
});
