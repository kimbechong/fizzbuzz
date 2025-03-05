# FizzBuzz Challenge

Mob Programming: Collaborative Coding Workshop

## Goal 1

Create a function in `fizzbuzz.js` that prints a number given number **n**. However, the function should print the following if the conditions are true:

1. "Fizz" if the number is a multiple of 3
2. "Buzz" if the number is a multiple of 5
3. "FizBuzz" if the number is a multiple of both 3 and 5

### Examples

| Input | Output     |
| ----- | ---------- |
| 1     | "1"        |
| 3     | "Fizz"     |
| 15    | "FizzBuzz" |

## Goal 2

Change your function to print numbers from 1 to the given number **n**. However, the function should print the following if the conditions are true:

1. "Fizz" if the number is a multiple of 3
2. "Buzz" if the number is a multiple of 5
3. "FizBuzz" if the number is a multiple of both 3 and 5

### Examples

| Input | Output                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 3     | ["1", "2", "Fizz"]                                                                                                                        |
| 10    | [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”]                                                                         |
| 20    | [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”, “11”, “Fizz”, “13”, “14”, “FizzBuzz”, “16”, “17”, “Fizz”, “19”, “Buzz”] |

## Tips

-   Use Test Driven Development (TDD)

    -   Write failing unit test in `fizzbuzz.test.js`
    -   Run the test

        ```shell
        npm test
        ```

    -   Write just enough code in `fizzbuzz.js` to pass the test
    -   Run the test again to confirm it passes
    -   Repeat TDD process

-   Export and import your function for unit tests

    ```js
    // fizzbuzz.js
    module.exports = { myFunction };
    ```

    ```js
    // fizzbuzz.test.js
    const { myFunction } = require('./fizzbuzz');
    ```

-   Use comments to keep track of tasks and code changes
