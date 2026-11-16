// ============================================================
// JavaScript Functions Assignment
// Run with: node functions.js
// ============================================================

// ------------------------------------------------------------
// STRING MANIPULATION FUNCTIONS
// ------------------------------------------------------------

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example:
console.log("Reverse a String:");
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// Example:
console.log("\nCount Characters:");
console.log(countCharacters("JavaScript")); // 10
console.log(countCharacters("Hello World")); // 11 (the space counts too)

// 3. Capitalize Words (first letter of each word)
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(" ");
}

// Example:
console.log("\nCapitalize Words:");
console.log(capitalizeWords("i love learning code")); // "I Love Learning Code"
console.log(capitalizeWords("lagos is a big city")); // "Lagos Is A Big City"

// ------------------------------------------------------------
// ARRAY FUNCTIONS
// ------------------------------------------------------------

// 4a. Find Maximum
function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

// Example:
console.log("\nFind Maximum:");
console.log(findMax([4, 9, 2, 15, 7])); // 15
console.log(findMax([-5, -1, -8])); // -1

// 4b. Find Minimum
function findMin(numbers) {
  if (numbers.length === 0) return undefined;
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

// Example:
console.log("\nFind Minimum:");
console.log(findMin([4, 9, 2, 15, 7])); // 2
console.log(findMin([-5, -1, -8])); // -8

// 5. Sum of Array
function sumArray(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

// Example:
console.log("\nSum of Array:");
console.log(sumArray([4, 9, 2, 15, 7])); // 37
console.log(sumArray([10, 20, 30])); // 60

// 6. Filter Array (keeps elements where the condition returns true)
function filterArray(arr, condition) {
  const result = [];
  for (const item of arr) {
    if (condition(item)) result.push(item);
  }
  return result;
}

// Example:
console.log("\nFilter Array:");
const numbers = [4, 9, 2, 15, 7];
console.log(filterArray(numbers, (n) => n % 2 === 0)); // [4, 2] (even numbers)
console.log(filterArray(numbers, (n) => n > 5)); // [9, 15, 7] (greater than 5)

// ------------------------------------------------------------
// MATHEMATICAL FUNCTIONS
// ------------------------------------------------------------

// 7. Factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Factorial is only defined for non-negative integers";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example:
console.log("\nFactorial:");
console.log(factorial(5)); // 120 (5 x 4 x 3 x 2 x 1)
console.log(factorial(0)); // 1
console.log(factorial(-3)); // error message

// 8. Prime Number Check
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example:
console.log("\nPrime Number Check:");
console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
console.log(isPrime(1)); // false

// 9. Fibonacci Sequence (first n terms)
function fibonacci(terms) {
  const sequence = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < terms; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

// Example:
console.log("\nFibonacci Sequence:");
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]