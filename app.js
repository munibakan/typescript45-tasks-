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
