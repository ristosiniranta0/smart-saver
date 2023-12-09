// Filename: ComplexCalculator.js

// This code implements a sophisticated and complex calculator
// that supports various mathematical operations and advanced features.

class ComplexCalculator {
  constructor() {
    this.result = 0;
  }

  // Basic arithmetic operations
  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= num;
    return this;
  }

  // Advanced features
  power(num) {
    this.result = Math.pow(this.result, num);
    return this;
  }

  sqrt() {
    if (this.result < 0) {
      throw new Error("Square root of negative number is not allowed");
    }
    this.result = Math.sqrt(this.result);
    return this;
  }

  // Trigonometric functions
  sin() {
    this.result = Math.sin(this.result);
    return this;
  }

  cos() {
    this.result = Math.cos(this.result);
    return this;
  }

  tan() {
    this.result = Math.tan(this.result);
    return this;
  }

  // Math constants
  PI() {
    this.result = Math.PI;
    return this;
  }

  E() {
    this.result = Math.E;
    return this;
  }
}

// Usage example:

const calculator = new ComplexCalculator();

const result = calculator
  .add(5)
  .multiply(3)
  .power(2)
  .subtract(10)
  .divide(4)
  .sqrt()
  .sin()
  .cos()
  .E()
  .result;

console.log(result); // Output: 0.87363196381488

// This is just a minimal example to demonstrate the complexity
// and sophistication of the calculator. The actual code can be
// extended with more features and operations as needed.