const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/plain' })
            res.end("404 Not Found");
            return;
        }
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(data)
    })
    
})
const Port=3000
server.listen(Port,()=>{
    console.log(`Server running at http://localhost:${Port}`)
})