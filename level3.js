/**
 * Loops & two-dimensional arrays
 */

let sentence = ["There", "are", "multiple", "ways", "to", "loop", "through", "arrays", "!"];
let output, i;

// DO-WHILE
output='';
i=0;
do {
    output += sentence[i] + " ";
} while (i++ < sentence.length);
console.log(output); // Note the "undefined" at the end! Why did this happen?

// WHILE
output='';
i=0;
while (i < sentence.length) {
    output = output + sentence[i++] + " ";
}
console.log(output);

// FOR
output='';
i=0;
for (i = 0; i < sentence.length; i++) {
    output = `${output}${sentence[i]} `;
}
console.log(output);

// FOR...IN
output='';
i=0;
for (let key in sentence) {
    output += sentence[key] + " ";
}
console.log(output);

// FOR...OF
output='';
i=0;
for (let word of sentence) {
    output += word + " ";
}
console.log(output);


// Study the examples above. What are the differences? What's is more useful in which situation?
// Note that they are almost completely exchangeable though!
// I only used multiple ways to concatenate the string to show you the variety of ways to do it.

/*
 *  Mini-Exercise: Find a way to inverse the order with every loop method!
 *  Expected result: ! arrays through loop to ways multiple are There
 *  Bonus points if you manage to loose the whitespace " " between ! and arrays
 */

// DO...WHILE

// WHILE

// FOR

// FOR...IN

// FOR...OF


/**
 * MULTI-DIMENSIONAL ARRAYS
 * Now that you know the basics of the various loop functions, let's have a look at two dimensional arrays.
 * The syntax is fairly simple but you might need some time to keep the oversight of what is stored where.
 *
 * So what are multi-dimensional arrays? Basically they are arrays inside arrays!
 */

let multi = []; // empty array
multi.push(["The", "first", "'row'."]);
multi.push(["Second", "'row'."]);

/*
 * So inside multi, we now have:
 *
 * 0 => ["The", "first", "'row'."]
 * 1 => ["Second", "'row'."]
 *
 * Of course, you could even add another dimension by putting an array inside one of the arrays. But to keep the
 * complexity low, we will stay with 2 dimensions!
 *
 * I always like to thing of two dimensional arrays as some kind of table or registrar.
 * So you could think of a Excel table for example!
 *
 *   | 0      | 1       | 2
 * ==============================
 * 0 | The    | first   | 'row' |
 * ------------------------------
 * 1 | Second | 'row'   |    <-- the 3rd column in the 2nd row is not defined btw! So sub-arrays don't have to have the same length!
 */

// If you now want to address the first column of the first row, you simply write
console.log(`multi[0][0]: ${multi[0][0]}`);

// The first number decides about the "row"/sub-array, the second index decides about the position inside the sub-array

// replace the two strings inside the if-clause, so they point to the two mentioned columns inside multi!
if ("'row' from first row" === "'row' from second row") {
    console.log("Success. Moving on...");
}

const even = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 7, 9];

const result =  []; // @TODO

// Use a/multiple loop functions of your choice to push the values of odd and even into an array

/* Your code goes here. */

/** Helper method to compare arrays in JS */
function compareArrays(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}

if (compareArrays(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) {
    console.log("Success. Moving on...");
}

const nextLevelResult = [];
const nextLevel = [odd, even];
// Now do the same with a two-dimensional array

/* Your code goes here. */

if (nextLevelResult === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log("Success. Moving on...");
}

const chaos = [
    [7, 15, 3, 12, 8, 5, 2, 0],
    [6, 4, 11, 10, 1, 9, 14, 13]
];
let sortedChaos = [];
// Oh no! What a chaos! Looks like we need to sort through a two-dimensional array.
// But don't worry. We're not gonna go into sorting-algorithms (yet!).
// Sometimes the easiest approach provides the best solution ;-)
// (Oder wie mein Algorithmen-Prof zu sagen pflegte: Stumpf ist Trumpf!)

/* Your code goes here. */

if (sortedChaos === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    console.log("Success. Moving on...");
}