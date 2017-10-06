var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'))

var dba = require('./lib/dba-helper.js')();

app.use(bodyParser.json());

var cookies = false;

app.get('/cookies', function(req,res){

    res.send(cookies);
});

app.post('/cookies', function(req,res){

    var newCookie = req.body;

    if(newCookie.username=='mechy'){
        console.log(req.body);
        cookies=true;
    }
});

var master = [];

app.get('/master', function(req,res){

    res.send(master);
})

app.post('/master', function(req,res){

    //dba.addMaster(req.body);
    master.push(req.body);
});

app.post('/deletemaster', function(req,res){

    var index = req.body;
    master.splice(index,1);
});

app.get('/reporte', function(req,res){

    var masterDBA = dba.getMaster({});

    res.send(masterDBA);
})

app.get('/logout',function(req,res){

    cookies = false;
    res.redirect('/');
});

app.listen(80);
