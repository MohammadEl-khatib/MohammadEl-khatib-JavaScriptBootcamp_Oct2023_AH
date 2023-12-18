import { VirtualPet } from "../src/pet";

describe('VirtualPet', () => {
    it('initializes with correct values', () => {
        const pet = new VirtualPet("Bob");
        expect(pet.name).toBe("Bob");
        expect(pet.hunger).toBe(50);
        expect(pet.happiness).toBe(50);
    });

    it('describes the pet correctly', () => {
        const pet = new VirtualPet("Bob");
        expect(pet.describe()).toBe("Name: Bob, Hunger: 50, Happiness: 50");
    });

   

    it('feed method decreases hunger but not below 0', () => {
        const pet = new VirtualPet("Bob");
        pet.feed();
        expect(pet.hunger).toBe(40);
        for (let i = 0; i < 5; i++) {
            pet.feed();
        }
        expect(pet.hunger).toBe(0);
    });

    it('play method increases happiness but not above 100', () => {
        const pet = new VirtualPet("Bob");
        pet.play();
        expect(pet.happiness).toBe(60);
        for (let i = 0; i < 5; i++) {
            pet.play();
        }
        expect(pet.happiness).toBe(100);
    });
});
