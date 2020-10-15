//Importing Expres Framework
const express = require ('express');

//Importing sentiment framework
const Sentiment = require ('sentiment');

//Creating express app
const app = express();

//Creating Sentiment object
var sentiment = new Sentiment();

const port = 9000;

app.use(express.static(__dirname+ '/public'))

//start server and listen to the port 9000
app.listen(port);

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