import { GasCar } from "../src/gascar";
import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "../src/racer-functions";
import { SolarCar } from "../src/solarcar";



describe('racer-functions', () => {
    describe('findRacersWithEmptyFuel', () => {
        it('finds GasCar with no fuel', () => {
            const racers = [
                new GasCar("Team Gas 1", 0),
                new GasCar("Team Gas 2"),
                new SolarCar("Team Solar")
            ];
            const emptyFuelRacers = findRacersWithEmptyFuel(racers);
            expect(emptyFuelRacers.length).toBe(1);
            expect(emptyFuelRacers[0].team).toBe("Team Gas 1");
        });

     
    });

    describe('findAverageSpeed', () => {
        it('calculates average speed of mixed racers', () => {
            const racers = [
                new GasCar("Team Gas", 10),
                new SolarCar("Team Solar")
            ];
            racers[0].speed = 10;
            racers[1].speed = 5;
            expect(findAverageSpeed(racers)).toBe(7.5);
        });

       
    });

    describe('getFasterRacer', () => {
        it('finds faster racer', () => {
            const racerA = new SolarCar("Team Solar");
            const racerB = new GasCar("Team Gas");
            racerA.speed = 10;
            racerB.speed = 12;
            expect(getFasterRacer(racerA, racerB)).toBe(racerB);
        });

        it('returns null for racers with same speed', () => {
            const racerA = new SolarCar("Team Solar");
            const racerB = new GasCar("Team Gas");
            racerA.speed = 10;
            racerB.speed = 10;
            expect(getFasterRacer(racerA, racerB)).toBeNull();
        });

       
    });
});
