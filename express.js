var express = require('express');

var app = express();

app.get('/', function (req,res) {
    res.send('<h1>HAHA</h1>')
})

app.listen(3000, function () {
    console.log("done");
})