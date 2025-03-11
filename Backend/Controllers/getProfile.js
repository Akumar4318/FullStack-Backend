

const User=require('../Models/userSchema')

exports.getProfile= async(req,res)=>{

  try {
    const foundUser=req.User

    if(!foundUser){
        
        throw new Error("User does not exist")
    }

    res.status(200).json({
        success:true,
        data:foundUser
    })
  } catch (error) {
    
    res.status(400).json({
        success:false,
        message:error.message
    })
  }
}
