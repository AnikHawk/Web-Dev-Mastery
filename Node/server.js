const express = require('express')
const bodyParser = require('body-parser')

app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))



app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send("<h1>Hello " + req.params.id + "</h1>")
})


app.get('/profile', (req, res) => {
    res.send("<h3>Hi there, User!!!</h3>")
})

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send("Welcome")
})

app.listen(3000)