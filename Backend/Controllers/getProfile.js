

const User=require('../Models/userSchema')

exports.getProfile= async(req,res)=>{

  try {

    // const {id}=req.params
    // const response=await User.findById(id)
    
    const foundUser=req.User
    
    if(!foundUser){
        
      throw new Error("User does not exist")
  }


    res.status(200).json({
      success:true,
      data:foundUser,
      message:"user found"
    })
    

  } catch (error) {
    
    res.status(400).json({
        success:false,
        message:error.message
    })
  }
}
