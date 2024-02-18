"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gascar_1 = require("../src/gascar");
describe('GasCar', () => {
    it('initializes with correct team and default fuel', () => {
        const car = new gascar_1.GasCar("Team Gas");
        expect(car.team).toBe("Team Gas");
        expect(car.fuel).toBe(10);
        expect(car.speed).toBe(0);
    });
    it('accelerate increases speed and decreases fuel', () => {
        const car = new gascar_1.GasCar("Team Gas");
        car.accelerate();
        expect(car.speed).toBe(2);
        expect(car.fuel).toBe(9);
        car.accelerate();
        expect(car.speed).toBe(4);
        expect(car.fuel).toBe(8);
    });
    it('isFuelEmpty returns true when fuel is 0', () => {
        const car = new gascar_1.GasCar("Team Gas", 1);
        car.accelerate();
        expect(car.isFuelEmpty()).toBe(true);
    });
    it('isFuelEmpty returns false when fuel is greater than 0', () => {
        const car = new gascar_1.GasCar("Team Gas");
        expect(car.isFuelEmpty()).toBe(false);
    });
});
