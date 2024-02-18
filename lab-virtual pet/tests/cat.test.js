"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("../src/cat");
describe('Cat', () => {
    it('initializes with correct values', () => {
        const cat = new cat_1.Cat("Whiskers", "orange");
        expect(cat.name).toBe("Whiskers");
        expect(cat.color).toBe("orange");
        expect(cat.hunger).toBe(50);
        expect(cat.happiness).toBe(50);
    });
    it('returns inquisitive for positive satisfaction', () => {
        const cat = new cat_1.Cat("Whiskers", "orange");
        cat.happiness = 70;
        cat.hunger = 50;
        expect(cat.getAttitude()).toBe("inquisitive");
    });
    it('returns grumpy for negative or zero satisfaction', () => {
        const cat = new cat_1.Cat("Whiskers", "orange");
        cat.happiness = 50;
        cat.hunger = 70;
        expect(cat.getAttitude()).toBe("grumpy");
        cat.happiness = 50;
        cat.hunger = 50;
        expect(cat.getAttitude()).toBe("grumpy");
    });
    it('describe method returns correct string', () => {
        const cat = new cat_1.Cat("Bob", "orange");
        cat.happiness = 50;
        cat.hunger = 60;
        expect(cat.describe()).toBe("Name: Bob, Hunger: 60, Happiness: 50, Color: orange, Attitude: grumpy");
    });
});
