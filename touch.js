#!/usr/bin/env node
 var fs = require('pn/fs');
var filename =process.argv[2]
 fs.exists(process.argv[2], function (exists) {

if(exists){

 var currentTs = new Date();
 fs.utimes(filename, currentTs, currentTs)
}else{
	fs.open(filename,"w")
}

});
 