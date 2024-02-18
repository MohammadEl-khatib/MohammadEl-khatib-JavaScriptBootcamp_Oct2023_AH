"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasCar = void 0;
class GasCar {
    constructor(team, fuel = 10) {
        this.speed = 0;
        this.team = team;
        this.fuel = fuel;
    }
    accelerate() {
        if (this.fuel > 0) {
            this.speed += 2;
            this.fuel -= 1;
        }
    }
    isFuelEmpty() {
        return this.fuel <= 0;
    }
}
exports.GasCar = GasCar;
