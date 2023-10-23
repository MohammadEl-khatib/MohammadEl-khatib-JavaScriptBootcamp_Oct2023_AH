// cooling/heating
var actualTemp = 70;
var desiredTemp = 70;
if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else if (actualTemp < desiredTemp) {
    console.log("Run heat")
} else {
    console.log("Standby")
}
//extended challenge
var tempCelsius = 35;
var targetUnit = 'K'; 
if (targetUnit === 'F') {
    let f = tempCelsius * 9 / 5;
    console.log(f + " F");
} else if (targetUnit === 'K') {
    let k = tempCelsius + 273.15;
    console.log(k + " K")
} else { console.log(tempCelsius + " C") }