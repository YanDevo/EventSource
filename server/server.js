const bodyParser = require('body-parser');
const express = require('express');


//-----
const app = express();     //create an instance of express
app.use(bodyParser.json())  //specify the bodyparser to handle json data

// ----- From ROUTES/API
const api = require('./routes/api'); //for routes: require exported router 
app.use('/api', api)        //specify the endpoint name and what the server will use (api route) to get to that endpoingt

//test a get request
app.get('/', function (req, res) {
    res.send("Hello from server");

})




const PORT = 3000;          //specify port #

app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
    
})