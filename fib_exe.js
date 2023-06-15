

   //1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
   //Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

//2.Now write another function fibsRec which solves the same problem recursively
//This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider
//either of these lengths a requirement… just get it done).






function fib(n) {
  let result = [];

  if (n >= 1) {
    result.push(0); // Add the first Fibonacci number (0) to the result array if n is 1 or greater.
  }

  if (n >= 2) {
    result.push(1); // Add the second Fibonacci number (1) to the result array if n is 2 or greater.
  }

  for (let i = 2; i < n; i++) {
    const num = result[i - 1] + result[i - 2]; // Calculate the next Fibonacci number by summing the last two numbers in the result array.

    result.push(num); // Add the calculated Fibonacci number to the result array.
  }

  return result; // Return the array containing the Fibonacci sequence.
}

const fibresults = fib(18); // Call the fib function with n = 18 to generate the first 18 Fibonacci numbers.
console.log(fibresults); // Output the generated Fibonacci sequence.




RECURSIVE METHOD ;





function fib(n) {
  if (n <= 0) {
    return []; // Base case: if n is less than or equal to 0, return an empty array.
  } else if (n === 1) {
    return [0]; // Base case: if n is 1, return an array with the first Fibonacci number (0).
  } else if (n === 2) {
    return [0, 1]; // Base case: if n is 2, return an array with the first two Fibonacci numbers (0, 1).
  } else {
    const fibSequence = fib(n - 1); // Recursive call to generate the Fibonacci sequence up to n - 1.
    const prevNum1 = fibSequence[fibSequence.length - 1]; // Get the last Fibonacci number from the generated sequence.
    const prevNum2 = fibSequence[fibSequence.length - 2]; // Get the second-to-last Fibonacci number from the generated sequence.
    const currentNum = prevNum1 + prevNum2; // Calculate the current Fibonacci number.

    fibSequence.push(currentNum); // Add the current Fibonacci number to the sequence.
    return fibSequence; // Return the updated Fibonacci sequence.
  }
}

const fibResults = fib(18); // Call the fib function with n = 18 to generate the first 18 Fibonacci numbers.
console.log(fibResults); // Output the generated Fibonacci sequence.
