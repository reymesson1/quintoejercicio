module.exports = function(){ 

        var moment = require('moment');

        var today = moment(new Date()).format('YYYY-MM-DD');


	function getUsers(user,callback){ 

		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/mechy";
		MongoClient.connect(url, function(err, db) {
	            if (err) throw err;        
	              db.collection("users").find(user).toArray(function(err,result){            
        	          callback(result);   
	        })        
	        db.close();
          	});

	}

	

	function getMaster(master,callback){ 

		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/mechy";
		MongoClient.connect(url, function(err, db) {
	            if (err) throw err;        
	              db.collection("master").find({"date":today}).toArray(function(err,result){            
        	          callback(result);   
	        })        
	        db.close();
          	});
	}

	function getDetail(detail,callback){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                      db.collection("detail").find({}).toArray(function(err,result){
                          callback(result);
                })
                db.close();
                });

        }

	function addMaster(master){

		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/mechy";

		MongoClient.connect(url, function(err, db) {

			if (err) throw err;
			db.collection("master").insertOne(master, function(err, res) {
			
				if (err) throw err;
				console.log("1 record inserted");
				db.close();
	
			});

		});

	}
	
	function addDetail(detail){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";

                MongoClient.connect(url, function(err, db) {

                        if (err) throw err;
                        db.collection("detail").insertOne(detail, function(err, res) {

                                if (err) throw err;
                                console.log("1 record inserted");
                                db.close();

                        });

                });

        }

	function removeDetail(detail){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";

                MongoClient.connect(url, function(err, db) {

                        if (err) throw err;
                        db.collection("detail").remove(detail, function(err, res) {

                                if (err) throw err;
                                console.log("1 record removed");
                                db.close();

                        });

                });

        }

	function getWeeklyReport(detail,callback){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                      db.collection("master").aggregate([{"$project":{"_id":true,"date":true,"item.development":true,"project":true,"pago":"$project"}},{"$group":{"_id":{"fecha":"$date","item":"$item.development"},"total":{"$sum":"$pago"}}},{"$group":{"_id":"$_id.fecha","count":{"$push":{"item":"$_id.item","totales":"$total"}}}},{"$sort":{"_id":-1}}]).toArray(function(err,result){
                          callback(result);
                })
                db.close();
                });

        }

	function getWeeklyReportRecap(detail,callback){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                      //db.collection("master").aggregate([{"$match":{"date":{"$gte":"2018-06-15","$lte":"2018-06-31"}}},{"$group":{"_id":"$item.development","total":{"$sum":"$project"}}},{"$sort":{"_id":1}}]).toArray(function(err,result){
               db.collection("master").aggregate([{"$match":{"date":{"$gte":"2018-07-15","$lte":"2018-07-31"}}},{"$unwind":"$item"},{"$group":{"_id":"$item.development","total":{"$sum":"$project"}}}]).toArray(function(err,result){      
   
			callback(result); 
                })
                db.close();
                });

        }

	function getWeeklyReportbyDevelopment(master,callback){

		 var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                      db.collection("master").aggregate([{"$group":{"_id":{"peluquera":"$item.development","fecha":"$date"},"total":{"$sum":"$project"}}}]).toArray(function(err,result){
                          callback(result);
                })
                db.close();
                });

        }
        
        function setMaster(master){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/mechy";

                MongoClient.connect(url, function(err, db) {

                        if (err) throw err;
                        db.collection("master").remove(master, function(err, res) {

                                if (err) throw err;
                                console.log("1 record removed");
                                db.close();

                        });

                });

        }



	return{
		
		getUsers: getUsers,
		addMaster: addMaster,
                getMaster: getMaster,
                setMaster: setMaster,
		addDetail: addDetail,
		getDetail: getDetail,
		removeDetail: removeDetail,
		getWeeklyReport: getWeeklyReport,
		getWeeklyReportRecap: getWeeklyReportRecap,
		getWeeklyReportbyDevelopment:getWeeklyReportbyDevelopment
	}

}
