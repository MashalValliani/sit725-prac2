//Importing Expres Framework
const express = require ('express');

//Importing sentiment framework
const Sentiment = require ('sentiment');

//Creating express app
const app = express();

//Creating Sentiment object
var sentiment = new Sentiment();

const port = 3000;

app.use(express.static(__dirname+ '/public'))

//Construct a basic
app.get('/test', function (req, res){
    console.log('Hello World app is listening on port 3000!')
    res.send('Hello World');
})

//start server and listen to the port 3000
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

//Sentiment Analysis

//Creating a function to anlyze the sentiments from a string
let sentimentAnalysis = function(text){
    var result = sentiment.analyze(text);
    return result;
}

//Sentimental analysis by getting string from user
app.get('/sentiment', function(req, res){
    let analysis= sentimentAnalysis('Cats are stupid');
    console.log(analysis);
    res.json(analysis);
}) 


app.get('/sentimentAnalysis', function(req, res){
    let text = req.query.text;
    let analysis= sentimentAnalysis(text);
    console.log(analysis);
    res.json(analysis);
}) 