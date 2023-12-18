import { Cat } from "../src/cat";
import { Dog } from "../src/dog";
import { VirtualPet } from "../src/pet";
import { decay, makePet } from "../src/pet-functions";

describe('pet-functions', () => {
    describe('decay function', () => {
        it('adjusts hunger and happiness accordingly', () => {
            const pet = new VirtualPet("Buddy");
            decay(pet);
            expect(pet.hunger).toBe(55);
            expect(pet.happiness).toBe(45);
        });

        it('does not let hunger go above 100', () => {
            const pet = new VirtualPet("Buddy");
            pet.hunger = 98;
            decay(pet);
            expect(pet.hunger).toBe(100);
        });

        it('does not let happiness go below 0', () => {
            const pet = new VirtualPet("Buddy");
            pet.happiness = 3;
            decay(pet);
            expect(pet.happiness).toBe(0);
        });
    });

    describe('makePet function', () => {
        it('returns a Dog for type dog', () => {
            const pet = makePet("Rover", "dog");
            expect(pet instanceof Dog).toBeTruthy();
            expect(pet.name).toBe("Rover");
        });

        it('returns a Cat for type cat', () => {
            const pet = makePet("Whiskers", "cat");
            expect(pet instanceof Cat).toBeTruthy();
            expect(pet.name).toBe("Whiskers");
        });

        it('returns a VirtualPet for other types', () => {
            const pet = makePet("Buddy", "turtle");
            expect(pet instanceof VirtualPet).toBeTruthy();
            expect(pet.name).toBe("Buddy");
        });
    });
});
