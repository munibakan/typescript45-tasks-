"use strict";
function describe_city(nameOfCity, country = "asia") {
    return `${nameOfCity} is in ${country}`;
}
;
let city1 = describe_city("baku, Azerbaija");
let city2 = describe_city("delhi, india");
let city3 = describe_city("Hyderabad, pakistan");
let city4 = describe_city("sharja, dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
