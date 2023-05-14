var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  
   res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"result":"Hello World from nodejs","author":"Thirumurthy","type":"Docker KSS-1"}, null, 3));
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
