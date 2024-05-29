var current_users = ["sana", "admin", "sana", "hina", "hala"];
var new_users = ["fawwad", "baber", "user7", "admin", "user9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("$(newUser} will need to enter a new username.");
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
