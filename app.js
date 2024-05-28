var Guest_List = ["anum", "saba", "hina"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], " : \n you are invited to Dinner! \n"));
}
console.log("\"unfortunately ".concat(Guest_List[1], ", can't come to dinner! \n\""));
Guest_List[1] = "aizah";
console.log("\n New list of Invitation: \n");
for (var j = 0; j < Guest_List.length; j++) {
    console.log("Dear ".concat(Guest_List[j], " : \n New list of Invitation \n"));
}
console.log("Good News! we have found a bigger dinner table,so more space is avaible. so our new guest are :\n");
Guest_List.unshift("amna", "aaira", "haala");
console.log(Guest_List);
Guest_List.splice(2, 0, "aaira");
console.log(Guest_List);
Guest_List.push("haala");
console.log(Guest_List);
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], ": \n you are invited to dinner! \n"));
}
