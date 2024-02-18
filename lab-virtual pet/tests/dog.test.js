"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("../src/dog");
describe('Dog', () => {
    it('should initialize with a name and default hunger and happiness values', () => {
        const dog = new dog_1.Dog("Rex");
        expect(dog.name).toBe("Rex");
        expect(dog.hunger).toBe(50);
        expect(dog.happiness).toBe(50);
    });
    it('play method should increase happiness by 15', () => {
        const dog = new dog_1.Dog("Rex");
        dog.play();
        expect(dog.happiness).toBe(65);
    });
    it('play method should not increase happiness past 100', () => {
        const dog = new dog_1.Dog("Rex");
        for (let i = 0; i < 10; i++) {
            dog.play();
        }
        expect(dog.happiness).toBe(100);
    });
});
