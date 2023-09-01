//Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit : string[] = ["Santorini", "Bora Bora", "Amsterdam", "Machu Picchu", "Kyoto"];
// Original order
console.log("Original Order:");
console.log(placesToVisit);

// Alphabetical order without modifying the original list
const alphabeticalOrder = [...placesToVisit].sort();
console.log("\nAlphabetical Order (without modifying original list):");
console.log(alphabeticalOrder);

// Confirm the original order is still intact
console.log("\nOriginal Order (original list is unchanged):");
console.log(placesToVisit);

// Reverse alphabetical order without changing the original list
const reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (without modifying original list):");
console.log(reverseAlphabeticalOrder);

// Confirm the original order is still intact
console.log("\nOriginal Order (original list is unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order (after reversing again):");
console.log(placesToVisit);

// Sort the list in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order (after sorting):");
console.log(placesToVisit);

// Sort the list in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (after sorting):");
console.log(placesToVisit);