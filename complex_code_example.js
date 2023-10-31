/*
 * Filename: complex_code_example.js
 * Description: This code is a complex example demonstrating various concepts and techniques in JavaScript.
 * Author: Jane Doe
 * Date: October 15, 2021
 */

// Constants
const PI = Math.PI;
const MAX_NUM = 100;

// Classes
class Shape {
  constructor() {
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return Math.pow(this.side, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Functions
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return sum / numbers.length;
}

// Main code
const shapes = [];
const numbers = [];

for (let i = 0; i < 10; i++) {
  const randomNumber = generateRandomNumber(1, MAX_NUM);
  numbers.push(randomNumber);

  let shape;

  if (randomNumber % 2 === 0) {
    shape = new Circle(randomNumber);
  } else if (randomNumber % 3 === 0) {
    shape = new Square(randomNumber);
  } else {
    shape = new Rectangle(randomNumber, generateRandomNumber(1, MAX_NUM));
  }

  shape.setColor("blue");
  shapes.push(shape);
}

console.log("Generated Shapes:");
shapes.forEach((shape) => {
  console.log(shape);
  console.log(`Area: ${shape.getArea()}`);
});

console.log("\nGenerated Numbers:");
console.log(numbers);

console.log(`Average of numbers: ${calculateAverage(numbers)}`);
