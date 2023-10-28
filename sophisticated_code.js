/* sophisticated_code.js */

// This code demonstrates a sophisticated and complex JavaScript program
// It calculates the nth Fibonacci number using memoization technique

function fibonacci(n) {
    let memo = {
        0: 0,
        1: 1
    };

    function fib(n) {
        if (n in memo) {
            return memo[n];
        }

        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }

    return fib(n);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function squareRoot(x) {
    if (x < 0) {
        throw "Cannot calculate square root of negative numbers";
    }

    let guess = x;

    while (true) {
        let previousGuess = guess;
        guess = (guess + x / guess) / 2;

        if (Math.abs(guess - previousGuess) < 0.000001) {
            return guess;
        }
    }
}

const calculateSum = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Usage:

console.log(fibonacci(10));          // Output: 55
console.log(fibonacci(20));          // Output: 6765

console.log(factorial(5));           // Output: 120
console.log(factorial(10));          // Output: 3628800

console.log(squareRoot(16));         // Output: 4
console.log(squareRoot(25));         // Output: 5
console.log(squareRoot(-1));         // Throws an exception

console.log(calculateSum([1, 2, 3]));       // Output: 6
console.log(calculateSum([10, 20, 30]));    // Output: 60

console.log(isPalindrome("racecar"));       // Output: true
console.log(isPalindrome("hello"));         // Output: false

const person = new Person("John", 25);
person.greet();                     // Output: "Hello, my name is John and I'm 25 years old."