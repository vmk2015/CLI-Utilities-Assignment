#!/usr/bin/env babel-node

let fs = require('pn/fs') 
let path =require('path')
    require('songbird')

 async function remove(rootPath)
{
     try 
     {
       
        let stat = await fs.stat(rootPath)
        if(stat.isFile()){
           console.log("removing file"+rootPath)
            let stat = await fs.promise.unlink(rootPath)
        }
        else{
        	 let fileNames =await fs.promise.readdir(rootPath)
             for (let fileName of fileNames) 
             {
                let filePath = path.join(rootPath, fileName)
                let stat1 = await fs.promise.unlink(filePath)
                
            }
              fs.promise.rmdir(rootPath).then(console.log("removing directory "+rootPath))
        }
    } catch (e) {
        console.log(e.stack)
    }
}

remove(process.argv[2])



 