class Room {
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }
  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  available = true;
}
room1 = new Room("Sun", 30, 20);
room2 = new Room("Green", 15, 20, 18);

console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.getArea());
console.log(room2.getPerimeter());

room2.available = false;
console.log(room2.available);
console.log(room1.available);

console.log(room1.capacity);
console.log(room2.capacity);
