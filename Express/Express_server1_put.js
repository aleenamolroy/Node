import express from 'express'
const app=express()
app.use(express.json())
const port=3000
app.get('/users',(req,res)=>{
    res.json(users)
})

let users=[]
app.post('/users',(req,res)=>{
    const {name}=req.body
    const id=users.length>0?Math.max(...users.map(user=>user.id))+1:1
    const newUser= users.push({id:id,name:name})
    res.status(204).send(newUser)
})
app.put('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id)
    const {name}=req.body
    const userIndex= users.findIndex(user=>user.id === userId)
    if(userIndex !== -1){
        users[userIndex].name=name;
        res.json(users[userIndex])
    }else{
        res.status(404).send('Not Found!')
    }
})
app.delete('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const userIndex=users.findIndex(user=>user.id === userId)
    if(userIndex!==-1){
        users.splice(userIndex,1)
        res.status(204).send()
    }
    else{
        res.status(404).send('Not Found!')
    }
})
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
