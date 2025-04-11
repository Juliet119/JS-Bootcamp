// if else statements to check the temperature
let temperature = 20;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature <= 15) {
  console.log("It's cold.");
} else if (temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Re-write if else statement code to check temperature using switch Statements.
switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

// Divisibility Check
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Re-write the Divisibility check code using switch Statements.
switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// for loops
// print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// print all even numbers between 1 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
// Calculate the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Given arrays of numbers print each element to console
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Given the array of numbers, find the largest number
const numList = [3, 7, 2, 5, 10, 6];

// Start by saying the first number is the largest
let largestNumber = numList[0];
for (let i = 1; i < numList.length; i++) {
  if (numList[i] > largestNumber) {
    largestNumber = numList[i];
  }
}
console.log(largestNumber);

// While loops
// print numbers from 1 to 10
let count = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

// Print all even numbers between 1 and 20.
let num = 1;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Calculate the sum of all numbers from 1 to 100
let i = 1;
let total = 0;

while (i <= 100) {
  total += i;
  i++;
}
console.log("Sum is:", total);

// all multiples of 5 less than 50.
let x = 1;

while (x < 50) {
  if (x % 5 === 0) {
    console.log(x);
  }
  x++;
}

// Do while
