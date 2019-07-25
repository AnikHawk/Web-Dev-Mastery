// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
    username: "andrei",
    password: "supersecret"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [{
        username: "gray",
        password: "ice"
    },
    {
        username: "lucy",
        password: "celestial"
    },
    {
        username: "natsu",
        password: "fire"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [{
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

function isValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("Login Invalid")
    }
}

var prompUser = prompt("Username");
var promptPass = prompt("Pass");

signIn(prompUser, promptPass);