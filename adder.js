//Importing Expres Framework
const express = require ('express');

//Creating express app
const app = express();

const port = 9000;

app.use(express.static(__dirname+ '/public'))

//start server and listen to the port 9000
app.listen(port);

//Adding two Numbers

//creating function that takes two numbers and return the result
let addition = function(num1,num2){
    result = num1+num2
    return result;
}

app.get('/adder', function (req, res){
    let sum = addition(3, 15);
    res.send('The sum is ' + sum);
})

//addition by getting values from the user
app.get('/calcAdder', function(req, res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = addition(num1, num2);
    res.send('The sum is ' + sum);
})
