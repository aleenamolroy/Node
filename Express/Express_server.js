import express from "express";
const app= express()
app.get('/',function(req,res){
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('welcome to About page!')
})
app.get('/contact',function(req,res){
    res.send("Hello welcome to contact")
})

//post-> 
app.post('/',(req,res)=>{
    res.send('Hello Express!')
})
const port=3000
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

fetch("http://localhost:3000/", {
  method: "POST"
}).then(res => res.text())
  .then(console.log)
