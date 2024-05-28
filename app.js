"use strict";
let str1 = 'Affan';
let str2 = 'Sheikh';
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
//Tests for equality and inequality with strings.
console.log("Tests for equality and inequality of strings:");
console.log(str1 === 'Affan');
console.log(str1 === str2);
//Tests using the lower case function
console.log("\n Tests using the lower case function:");
console.log(str1.toLowerCase() === 'Affan');
console.log(str1.toLowerCase() !== 'sheikh');
//Numerical Tests
console.log("\nNumerical tests:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num1 !== 10);
//tests using 'and' & 'or' operators
console.log("\nTests using 'and' & 'or' operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//Tests whether an item is in an array 
console.log("\n whether an item is an array:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//test whether an item is not in an array
console.log("\n whether an item is not in an array:");
console.log(Arr.includes(6));
console.log(Arr.includes(2));
