const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    if(req.url==='/'){
        res.end('Welcome to Home Page')
    }
    else if(req.url==='/about'){
        res.end('welcome to about Page')
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('404 Not Found')
    }
})
const port=3000
server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})