/** FUNCTIONS
 * This will conclude the assignment!
 *
 * Create a function which prints for a given string input:
 * "The sentence has X characters."
 *
 * Create another function which finds the position of the first occurence
 * of "Endava" in a given string input and prints:
 * "Endava first appears on position X" or "Endava is not found in the input."
 *
 * Create a third function "printAddressInformation" that prints the address data of a Person object like this:
 * John Doe
 * Old Broadstreet 1
 * 12345 London
 */

/**
 *	YOUR CODE STARTS HERE
 */

printStringLength("Dies ist ein Satz mit 32 Zeichen");
printStringLength("Vier");

printAppearance("Endava is great!");
printAppearance("Have I told you about Endava?");
printAppearance("No, not 'and ava'!");

const persons = [
    {
        firstName: "John",
        lastName: "Doe",
        street: "Old Broadstreet 1",
        zipCode: 12345,
        city: "London"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        street: "Old Broadstreet 1",
        zipCode: 12345,
        city: "London"
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        street: "4 Privet Drive",
        zipCode: 'CR3 0AA',
        city: "Little Whinging, Surrey"
    }
];

/**
 * To access properties of an object, you can simply write objectName.property to get (OR SET) its value.
 */

let exampleObject = {
    title: 'Programming is so much fun!',
    text: '... but it can be hard sometimes.'
};

console.log(exampleObject.title + exampleObject.text);

for (let person of persons) {
    printAddressInformation(person);
}