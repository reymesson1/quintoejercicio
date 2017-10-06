module.exports = function(){ 

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
	              db.collection("master").find({}).toArray(function(err,result){            
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
	
	return{
		
		getUsers: getUsers,
		addMaster: addMaster,
		getMaster: getMaster
	}

}
