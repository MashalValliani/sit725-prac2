//Importing Expres Framework
const express = require ('express');

//Creating express app
const app = express();

const port = 9000;

app.use(express.static(__dirname+ '/public'))

//Construct a basic
app.get('/test', function (req, res){
    console.log('Hello World app is listening on port 3000!')
    res.send('Hello World');
})

//start server and listen to the port 9000
app.listen(port);
