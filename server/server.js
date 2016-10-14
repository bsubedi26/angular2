var express = require('express');
var app = express();

app.get('/user/data', (req,res) => {
    console.log('get request for /user/data')
})

app.get('/api/first', (req,res) => {
    console.log('first')
})

app.get('/api/second', (req,res) => {
    console.log('sec')
})
app.listen(3000, function() {
    console.log('Listening on PORT: 3000')
})