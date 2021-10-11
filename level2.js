/**
 * Conditions!
 */

if (false) {
    console.log("In the last level, you already saw the if condition.");
} else {
    console.log("Something went wrong?");
}

/**
 * In if- and else if-conditions, there is always a boolean condition that needs to be true for the code to jump
 * inside the if-clause. If it returns false, it will either jump into the else clause or continue (in case there is
 * no else-clause)
 */

if (true) {
    console.log("You can chain, if else-if and else");
} else if (1 == 1) {
    console.log("But the first condition that will return true will be used. The others are ignored!")
} else {
    console.log("So neither else-if nor else will be executed!");
}

console.log("And this is where the code will continue");

/**
 * Boolean conditions are usually one of those three:
 * - simple boolean values (in a variable): true/false, let condition = true;
 * - comparisons! Comparing values if they are equal or unequal and returning a boolean: 1===1, "two" != "three"
 * - methods that are returning a boolean: function isUneven(number) { return number % 2 !== 0; }
 */

console.log("Of course, you can also have if-clauses inside if-clauses!");

let comparison = 1 != 1;

if (comparison === true) {
    if (!comparison) {
        console.log("Success. Moving on...");
    }
} else {
    console.log("Hm... something's not right. Can you spot the error?");
}

// Another way to write long if, else-if, else-if, else-if, else-if, else clauses is a switch statement!
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(`Today is ${day}!`);


console.log("Only print out even numbers!")
let numbers = [...Array(30).keys()];
for (let number in numbers) {

    if (true) {
        console.log(number);
    }
}

/**
 * Alright! Warmup finished. Let's give you something to code!
 */

/**
 Coding Challenge: FizzBuzz
 Replace every number divisible by 3 with "Fizz"
 Replace every number divisible by 5 with "Buzz"
 Replace every number divisible by 3 & 5 with "FizzBuzz"
 Otherwise print the number.

 Do this for the numbers 1 to 30

 Expected output:
 1
 2
 Fizz
 4
 Buzz
 Fizz
 7
 8
 Fizz
 Buzz
 11
 Fizz
 13
 14
 FizzBuzz
 ...
 */

const LIMIT = 100;

for (let i=0; i < LIMIT; i++) {
    /**
     *	YOUR CODE STARTS HERE
     */
}
