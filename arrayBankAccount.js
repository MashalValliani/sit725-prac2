//Importing Expres Framework
const express = require ('express');

//Creating express app
const app = express();

const port = 9000;

//start server and listen to the port 9000
app.listen(port);

//Array to store deposit details of customers
let accounts=[
    {id:1,name:'Alex',deposit:5},
    {id:2,name:'Sarah',deposit:5},
    {id:3,name:'Jim',deposit:15}
]

//Creating a function to retrive data from array
let account = function(){
    var result =  "";
    var size = accounts.length;
    console.log('size = '+ size);
    Object.keys(accounts).forEach((key, index) => {
            console.log(accounts[key]);
            var myJsOn = JSON.stringify(accounts[key]);
            result += myJsOn + ' <br> ';         
            })
    return result;
}
//Creating a function to retrive data of a specific user
let accountUser = function(name){
    var result =  "";
    var size = accounts.length;
    Object.keys(accounts).forEach((key) => {
        if(Object.values(accounts[key]).includes(name)){
            console.log(accounts[key]);
            var myJsOn = JSON.stringify(accounts[key]);                
			result += myJsOn + ' <br> ';  
        }       
    })
    return result;
}


//This end point will display the full array content
app.get('/', function(req, res){
    console.log(Array.isArray(accounts));
    let deposit = account();
    res.send(deposit);
}) 

//This end point will display the full array content only for Sarah
app.get('/sarah', function(req, res){
    let deposit = accountUser('Sarah');
    res.send(deposit);
}) 

//This end point will display the full array content for entered user in the url
app.get('/username', function(req, res){
    let text = req.query.text;
    let deposit = accountUser(text);
    res.send(deposit);
}) 