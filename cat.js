#!/usr/bin/env node
 var fs = require('fs');
 
fs.exists(process.argv[2], function (exists) {
	//console.log(exists)
	if(exists){

		  fs.readFile(process.argv[2],'utf8', function (err, data) {
		  if (err) throw err;
		  console.log(data);
		  });
	}else{
		console.log( "file doesn't exists verify path");
	}
  
});

