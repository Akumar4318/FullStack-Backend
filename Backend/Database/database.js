
const mongoose=require('mongoose')


function ConnectDB(){


  return  mongoose.connect(process.env.DATABASE_URL)
}

module.exports=ConnectDB