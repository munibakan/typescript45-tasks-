"use strict";
let car = 'subaru';
console.log("\n -----> 5 tests evaluate to true :");
//test 1:
console.log("Is car == 'subaru'? I predict True .");
console.log(car === 'subaru');
//test:2
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');
//test 3:
console.log("Is the length of car > 4? I predict True. ");
console.log(car.length > 4);
//test 4:
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);
//test 5:
console.log("Does car start with 's' ?  I predict True.");
console.log(car.startsWith('s'));
console.log("\n ----> 5 tests evaluate to false.");
//test 1:
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');
//test 2:
console.log("Is car in uppercase? I predict False.");
console.log(car.toUpperCase() === car);
//test 3:
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
//test 4:
console.log("Is car == 'Audi'? I predict False.");
console.log(car === 'Audi');
//test 5:
console.log("Is the length of car === 7? I predict False.");
console.log(car.length === 7);
