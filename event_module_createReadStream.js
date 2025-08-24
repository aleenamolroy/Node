const fs=require('fs')
let rs=fs.createReadStream('./myFile.txt')
rs.on('open',function(){
    console.log('the file is open')
})
rs.on('data',function(chunk){
    console.log(chunk.toString())
})

const eventEmitter = require('events')
const myEmmitter= new eventEmitter()
myEmmitter.on('greet',()=>{
    console.log("Hello Welcome!")
})

myEmmitter.emit('greet')