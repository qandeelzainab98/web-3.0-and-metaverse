//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var placesToVisit = ["Santorini", "Bora Bora", "Amsterdam", "Machu Picchu", "Kyoto"];
// Original order
console.log("Original Order:");
console.log(placesToVisit);
// Alphabetical order without modifying the original list
var alphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("\nAlphabetical Order (without modifying original list):");
console.log(alphabeticalOrder);
// Confirm the original order is still intact
console.log("\nOriginal Order (original list is unchanged):");
console.log(placesToVisit);
// Reverse alphabetical order without changing the original list
var reverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nReverse Alphabetical Order (after sorting):");
console.log(placesToVisit);
