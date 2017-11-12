var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'))

var dba = require('./lib/dba-helper.js')();

app.use(bodyParser.json());

var cookies = true;

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

    dba.addMaster(req.body);
    master.push(req.body);
});

app.post('/deletemaster', function(req,res){

    var index = req.body;
    master.splice(index,1);
});


app.get('/reporte', function(req,res){

    dba.getMaster({}, function(data){

        res.send(data);

    });
})

var detail = [];

app.get('/detail',function(req,res){
 
    dba.getDetail({}, function(data){
	    res.send(data);
    });
});

app.post('/detail', function(req,res){

    detail.push(req.body);
    dba.addDetail(req.body)  
    res.send(req.body)
});

app.post('/deletedetail', function(req,res){

    var obj = req.body;  
    dba.removeDetail({"id":obj.id})
    detail.splice(obj.index,1);
});

app.post('/updatedetail',function(req,res){
    var obj = req.body;
    detail[obj.index].name=obj.name;

})

app.get('/logout',function(req,res){

    cookies = false;
    res.redirect('/');
});

app.get('/weeklyreport',function(req,res){

    dba.getWeeklyReport({}, function(data){
            res.send(data);
    });

})

app.get('/weeklyreportrecap',function(req,res){

    dba.getWeeklyReportRecap({}, function(data){
            res.send(data);
    });

})

app.get('/weeklyreportbydev',function(req,res){

	dba.getWeeklyReportbyDevelopment({},function(data){

		res.send(data)
	})
})

app.listen(80);
