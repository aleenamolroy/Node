const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Hello world!\n')
})
const Port=27017
server.listen(Port,'localhost',()=>{
    console.log(`server running at http://localhost:${Port}/`)
})