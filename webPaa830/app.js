var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'))

app.use(bodyParser.json());

var cookies = false;

app.get('/cookies', function(req,res){
    
    res.send(cookies);
});

app.post('/cookies', function(req,res){
    
    var newCookie = req.body;
    
    if(newCookie.username=='admin'){
        console.log(req.body);
        cookies=true;       
    }
})

app.listen(8080);