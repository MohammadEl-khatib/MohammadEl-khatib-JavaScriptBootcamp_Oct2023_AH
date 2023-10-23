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
