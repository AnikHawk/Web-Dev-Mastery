const fs = require('fs')


fs.readFile('./file.txt', (err, data) => {
    if (err) {
        console.log("errrrorrrrr");

    } else {
        console.log("Async", data.toString());

    }
})


fs.appendFile('./file.txt', ' Appended lol!!!', (err) => {
    if (err) {
        console.log(err)
    }
})