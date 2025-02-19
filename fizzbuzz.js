/*
GOAL 1
Create a function that prints given number n. However, the function should print the following if the conditions are true:
    1. "Fizz" if the number is a multiple of 3
    2. "Buzz" if the number is a multiple of 5
    3. "FizBuzz" if the number is a multiple of both 3 and 5

Tip: use comments to keep track of tasks and code changes
*/

function helloWorld() {
	return 'Hello, World!';
}

// GETTING STARTED
// 1 - write a simple failing unit test in fizzbuzz.test.js that covers one scenario
// 2 - run the test
// 3 - write just enough code to make the test pass
// 4 - run the test to confirm it passes
// 5 - refactor the code
// 6 - repeat TDD process

// Note: you need to explicitly export your functions so that the unit tests can call them
module.exports = { helloWorld };
