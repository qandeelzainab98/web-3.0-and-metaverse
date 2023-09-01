//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit equal to 'banana'? I predict False.");
console.log(fruit == 'banana');
var color1 = 'blue';
var color2 = 'green';
console.log("Is color1 not equal to color2? I predict True.");
console.log(color1 !== color2);
// Tests using the lower case function
var text1 = 'Hello, World!';
var text2 = 'hello, world!';
console.log("Are text1 and text2 equal when case is ignored? I predict True.");
console.log(text1.toLowerCase() === text2.toLowerCase()); // Should print True
var number1 = 10;
var number2 = 5;
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
var num1 = 20;
var num2 = 20;
console.log("Is num1 equal to num2? I predict True.");
console.log(num1 == num2);
var num3 = 15;
var num4 = 25;
console.log("Is num3 not greater than or equal to num4? I predict True.");
console.log(!(num3 >= num4));
// Tests using "and" and "or" operators
var isWeekend = true;
var hasTimeOff = false;
console.log("Is it the weekend and does the person have time off? I predict False.");
console.log(isWeekend && hasTimeOff);
var isSunnyDay = true;
var isOutdoorEvent = true;
console.log("Is it a sunny day or an outdoor event? I predict True.");
console.log(isSunnyDay || isOutdoorEvent);
// Test whether an item is in an array
var fruitsList = ['apple', 'banana', 'cherry', 'kiwi'];
var fruitToFind = 'cherry';
if (fruitsList.indexOf(fruitToFind) === -1) {
    console.log("".concat(fruitToFind, " is not in the fruitsList. I predict True."));
}
else {
    console.log("".concat(fruitToFind, " is in the fruitsList. I predict False."));
}
