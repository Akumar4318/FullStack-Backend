const express=require("express")
const ConnectDB=require('./Database/database')
const app=express()

require("dotenv").config()


app.use(express.json())

const PORT=process.env.PORT


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
