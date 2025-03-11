const express=require("express")
const ConnectDB=require('./Database/database')
const app=express()
const cookieParser=require('cookie-parser')

require("dotenv").config()


app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT


const routes=require('./Routes/allRoutes')
app.use('/api',routes)

const profileroutes=require('./Routes/profileRoutes')
app.use('/api/profile',profileroutes)

ConnectDB()
.then(()=>{
    console.log('db connected succesfully')
    app.listen(PORT,()=>{
        console.log('server created at port no.--->',PORT)
    })
})
.catch((error)=>{
    console.error(error)
console.log("db not connected ")
process.exit(1)
})
