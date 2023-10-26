function getAreaOfCircle(radius) {
  return radius * radius * Math.PI;
}
function getCircumfrenceOfCircle(radius) {
  return 2 * radius * Math.PI;
}
function getAreaOfSquare(side) {
  return side * side;
}
function getAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}
console.log(getAreaOfCircle(2));
console.log(getCircumfrenceOfCircle(3));
console.log(getAreaOfSquare(4));
console.log(getAreaOfTriangle(5, 6));
