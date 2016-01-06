#!/usr/bin/env babel-node

let fs = require('pn/fs')
    require('songbird')
 


 async function ls(rootPath){

console.log(rootPath)
try{
await fs.promise.mkdir(rootPath)
}catch(e){e.stack}
}

ls(process.argv[2])
