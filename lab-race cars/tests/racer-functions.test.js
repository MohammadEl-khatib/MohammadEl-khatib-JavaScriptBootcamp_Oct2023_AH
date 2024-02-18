"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gascar_1 = require("../src/gascar");
const racer_functions_1 = require("../src/racer-functions");
const solarcar_1 = require("../src/solarcar");
describe('racer-functions', () => {
    describe('findRacersWithEmptyFuel', () => {
        it('finds GasCar with no fuel', () => {
            const racers = [
                new gascar_1.GasCar("Team Gas 1", 0),
                new gascar_1.GasCar("Team Gas 2"),
                new solarcar_1.SolarCar("Team Solar")
            ];
            const emptyFuelRacers = (0, racer_functions_1.findRacersWithEmptyFuel)(racers);
            expect(emptyFuelRacers.length).toBe(1);
            expect(emptyFuelRacers[0].team).toBe("Team Gas 1");
        });
    });
    describe('findAverageSpeed', () => {
        it('calculates average speed of mixed racers', () => {
            const racers = [
                new gascar_1.GasCar("Team Gas", 10),
                new solarcar_1.SolarCar("Team Solar")
            ];
            racers[0].speed = 10;
            racers[1].speed = 5;
            expect((0, racer_functions_1.findAverageSpeed)(racers)).toBe(7.5);
        });
    });
    describe('getFasterRacer', () => {
        it('finds faster racer', () => {
            const racerA = new solarcar_1.SolarCar("Team Solar");
            const racerB = new gascar_1.GasCar("Team Gas");
            racerA.speed = 10;
            racerB.speed = 12;
            expect((0, racer_functions_1.getFasterRacer)(racerA, racerB)).toBe(racerB);
        });
        it('returns null for racers with same speed', () => {
            const racerA = new solarcar_1.SolarCar("Team Solar");
            const racerB = new gascar_1.GasCar("Team Gas");
            racerA.speed = 10;
            racerB.speed = 10;
            expect((0, racer_functions_1.getFasterRacer)(racerA, racerB)).toBeNull();
        });
    });
});
