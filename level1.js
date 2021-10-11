/**
 * Welcome to Level 1
 * To execute this javascript file, you can right-click the filename and click "Run (Node.js)" in PhpStorm
 * If you want to execute it directly from your CLI, you can execute "node level1.js"
 *
 * Note: When you run it via PhpStorm, you can also debug your code inside PhpStorm!
 *
 * Let's get started
 */

// in older JS version, there was only one keyword to define variables
var add1 = 5;
var add2 = 10;
var sum = add1 + add2;

console.log(`add1 + add2 = ${add1} + ${add2} = ${sum}`);

/**
 * Nowadays, you can choose between let, const, but still use var
 * const = Constant = not changeable after value is assigned
 */

const cantChange = 5;
// cantChange = 10;
// to make it work, comment out the line "cantChange = 10" with // or /* ... */


// let has a special complexity in terms of SCOPE
let one = "one";
let two;
if (one === "one") {
    let two = "two";
}
console.log(two);
/*
 * two is only available inside the if condition!
 * to make it work, move the variable initialisation without value (i.e. let two;) above the if, so that inside the if
 * two will only get a new value (two = "two")
 */
if (two === "two") {
    console.log("Success! Moving on...");
}

// Easy right? Let's continue with arrays
const three = [one, two, "three"];

/*
 * an array is a collection of key-value pairs. The keys start with the index 0.
 */
if (three[2] === "three") {
    console.log("Success! Moving on...");
}

three.push("four");
/*
 * Wait what?! You said const is not changeable!!
 * Welcome to the fun world of programming! ^^
 * The const is pointing to an array. And this "pointer" is not changing. Only the contents of this array
 */
// three = ["four"]; // won't work though because ["four"] is a new array!

if (three.length === 4) {
    console.log("Success! Moving on...");
}

three.pop();
/*
 * push() and pop() are array functions. They are usually used in the context of
 * Queues and Stacks (data structures -> google it!)
 *
 * Let's see what's inside the array now:
 */
for (let i=0; i < 3; i++) {
    console.log(`three[${i}]: ${three[i]}`);

    three[i] = i; // moving to numbers instead of strings (use the debug functionality to find out what's inside three)
}

/*
 * Calculating with variables
 */
let four = three[1] + three[3];
let four = 4;
if (four === 4) {
    three.push(four);
}

/*
 * While you could do four = four + 1 to add 1, you can also write four++.
 */
if (four-- === 3) {
    three.push(5);
}

console.debug(three);
/*
 * Wait what? Where's the 5? Why are there only 4 elements?
 * Next gotcha: four-- will first return its value and THEN decrease it.
 * Example:
 */
let five = 5;
let example = five--;
console.log(`example = five--;   results in: example === ${example}`);
example = --five;
console.log(`example = --five;   results in: example === ${example}`);

/*
 * Now fix the assignment above, so that three gets the push of 5!
 */
if (three.length === 5) {
    console.log("Success! Moving on...");
}

/*
 * Now multiply 5 by 4, divide it by 2 and add 3! Do this in one line!
 */
let thirteen = /* ... */;

/*
 * An operator that you already saw in the Coding Escape Game was the modulo operator that returns you the rest of a
 * division. This operator is extremely useful in many cases! You should definitely keep it in mind.
 */

if (thirteen /* ? */ 10 === 3) {
    console.log("Success! Moving on...");
}

/*
 * Let's finish up calculation and arrays
 */
three.push((three[2] / three[1]) * three[/* ? */]);

if (three[5] === 6) {
    console.log("Success! One last thing...");
}

/*
 * Iterate over the array with a for, for...in or for...of loop and print each value on a separate line.
 *
 * Expected result:
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 */
