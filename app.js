"use strict";
let Guest_List = ["anum", "saba", "hina"];
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]} : \n you are invited to Dinner! \n`);
}
console.log(`"unfortunately ${Guest_List[1]}, can't come to dinner! \n"`);
Guest_List[1] = "aizah";
console.log("\n New list of Invitation: \n");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]} : \n New list of Invitation \n`);
}
console.log("Good News! we have found a bigger dinner table,so more space is avaible. so our new guest are :\n");
Guest_List.unshift("amna");
console.log(Guest_List);
Guest_List.splice(2, 0, "aaira");
console.log(Guest_List);
Guest_List.push("haala");
console.log(Guest_List);
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}: \n you are invited to dinner! \n`);
}
console.log("unfortunately, the new dinner table won't arrive in time, so we can only invite) two peple for a dinner.\n");
while (Guest_List.length > 2) {
    let notInvited = Guest_List.pop();
    console.log(`Sorry, due to limited space we can't invite you on a dinner Miss. ${notInvited}\n`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}: \n you are still invited to dinner! \n`);
}
Guest_List.pop();
Guest_List.pop();
console.log(Guest_List);
