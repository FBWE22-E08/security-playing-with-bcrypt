# Security with bcrypt

This assignment will allow you to play around with the `bcrypt` package

## Tasks

To complete these tasks, you will be expected to write your solution in 2 files:

1. `register.js`
2. `login.js`

## Task 1 - getting bcrypt

1. Initialise `npm` with `npm init`

2. Install the `bcrypt` npm package with `npm i bcrypt`

3. Import `bcrypt` into your `register.js` file

## Task 2 - documentation

Familiarise yourself with the [bcrypt documentation](https://www.npmjs.com/package/bcrypt)

- How do you use it?
- What things can you do with it?

## Task 3 - writing a hashing helper function (register.js)

1. Open the file `register.js`
   
2. Import `bcrypt`
   
3. Write a function which takes a **string** as an argument, and uses `bcrypt.hash()` to hash the result and return the result. Use `10` as the number of salt rounds.

    > `bcrypt.hash(myPlaintextPassword, saltRounds)`
   
4. Run your function with the `userInput` variable, which you can populate from your terminal by adding an additional parameter, for example: `node register.js kittens` 

> Note: This method returns a promise, so you might want to use `async / await` or use `.then()`

5. Test your function by using `console.log()` to display the output

## Task 4 - playing with salt

Play around with the `saltRounds`. Use small and large numbers.

- How long does the program take to run?
- What would an ideal `saltRounds` number be?

## Task 5 - saving the hashed output to file

We would like to store the hash we generated in the previous function into a file, so we can read it again

1. In the file `register.js`, import the node.js file system library

    > Hint: `const fs = require('fs').promises;` for the promise version of the library

2. Use the `fs.writeFile()` method to write the hash to a file

## Task 6 - writing a compare helper function (login.js)

1. Open the file `login.js

2. Import `bcrypt` and the node js file system library (we will use it to read the file)

3. Write a function which takes a **string** as an argument

4. Use the `fs.readFile()` method to read the hash you stored in the file you created when you ran `register.js`
   
5. Use `bcrypt.compare()` to compare the `userInput` variable with the hash from the file you just read

    > `bcrypt.compare(myPlaintextPassword, hash)`
   
6. `bcrypt.compare()` returns either `true` or `false`
    - If `true`, display a message to the user stating that the passwords match
    - If `false`, display a message to the user stating that the passwords do not match

7. Test your code by running `node login.js {password}` - where `{password}` is the password you wish to test against the hash