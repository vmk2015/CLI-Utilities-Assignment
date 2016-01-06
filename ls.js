#!/usr/bin/env babel-node

let fs = require('pn/fs') 
let path =require('path')
    require('songbird')
 


   

 async function ls(rootPath,recursive){
 	//console.log(process.argv)
 	//console.log(rootPath)
	//console.log(recursive)
	var processfile =[]
	try{
		
	let fileNames = await fs.promise.readdir(rootPath)
	//console.log(fileNames)
	//processfile.push(fileName)
 
	for(let fileName of fileNames){
		let filePath = path.join(rootPath, fileName)
		//console.log(filePath)
		let stat = await fs.stat(filePath) 
    if(stat.isFile()){
    	processfile.push('\n'+filePath) 
    }else if(stat.isDirectory()){
    if( recursive=='-R'){
      ls(filePath,recursive) 
    	} else{
    		processfile.push('\n'+filePath) 
    	}
    
	}
}
  process.stdout.write(processfile + '\n')
  //console.log(processfile)
}catch(e){
	console.log(e.stack)
}
	
}
 


ls(process.argv[2],process.argv[3])
