"use strict";
let magicians = ["don", "rameez", " chris"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
make_great(magicians);
console.log(magicians);
