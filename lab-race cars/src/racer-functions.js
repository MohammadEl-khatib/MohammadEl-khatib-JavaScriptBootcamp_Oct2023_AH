"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFasterRacer = exports.findAverageSpeed = exports.findRacersWithEmptyFuel = void 0;
function findRacersWithEmptyFuel(racers) {
    return racers.filter(racer => racer.isFuelEmpty());
}
exports.findRacersWithEmptyFuel = findRacersWithEmptyFuel;
function findAverageSpeed(racers) {
    if (racers.length === 0)
        return 0;
    let totalSpeed = racers.reduce((sum, racer) => sum + racer.speed, 0);
    return totalSpeed / racers.length;
}
exports.findAverageSpeed = findAverageSpeed;
function getFasterRacer(racerA, racerB) {
    if (racerA.speed === racerB.speed)
        return null;
    return racerA.speed > racerB.speed ? racerA : racerB;
}
exports.getFasterRacer = getFasterRacer;
