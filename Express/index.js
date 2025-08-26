import express from 'express'
import path from 'path';
// import user_routes from './routes/user_route.js'
// import logger from './middlewares/logger.js'
// import error_handler from './middlewares/error_handler.js'

const app=express()
const port=3000

app.set('view engine',"ejs")
app.set("views",path.join(process.cwd(),"views"))

app.get('/',(req,res)=>{
    res.render('index',{title:"Home page"})
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})