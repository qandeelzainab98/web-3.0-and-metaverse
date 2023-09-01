//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';
let age = 25;
let isSunny = true;
let hasLicense = false;
let color = 'red';

// Test 1: Check if car is 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); 

// Test 2: Check if age is greater than or equal to 18
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); 

// Test 3: Check if it's sunny
console.log("Is it sunny? I predict True.");
console.log(isSunny); 

// Test 4: Check if hasLicense is false
console.log("Does the person not have a license? I predict True.");
console.log(!hasLicense);

// Test 5: Check if color is not 'blue'
console.log("Is the car not blue? I predict True.");
console.log(color !== 'blue'); 

// Test 6: Check if car is 'honda'
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); 

// Test 7: Check if age is less than 21
console.log("Is age < 21? I predict False.");
console.log(age < 21); 

// Test 8: Check if it's raining
console.log("Is it raining? I predict False.");
console.log(!isSunny); 

// Test 9: Check if hasLicense is true
console.log("Does the person have a license? I predict False.");
console.log(hasLicense); 

// Test 10: Check if color is 'green'
console.log("Is the car green? I predict False.");
console.log(color === 'green'); 
