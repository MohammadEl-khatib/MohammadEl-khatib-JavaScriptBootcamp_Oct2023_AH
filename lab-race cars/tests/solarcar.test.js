"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solarcar_1 = require("../src/solarcar");
describe('SolarCar', () => {
    it('initializes with correct values', () => {
        const car = new solarcar_1.SolarCar("Team Solar");
        expect(car.team).toBe("Team Solar");
        expect(car.speed).toBe(0);
    });
    it('accelerate increases speed', () => {
        const car = new solarcar_1.SolarCar("Team Solar");
        car.accelerate();
        expect(car.speed).toBe(1);
        car.accelerate();
        expect(car.speed).toBe(2);
    });
    it('isFuelEmpty always returns false', () => {
        const car = new solarcar_1.SolarCar("Team Solar");
        expect(car.isFuelEmpty()).toBe(false);
    });
});
