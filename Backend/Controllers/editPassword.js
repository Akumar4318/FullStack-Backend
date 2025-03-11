const User=require('../Models/userSchema')
const bcrypt=require('bcrypt')
const validator=require('validator')

exports.editPassword=async(req,res)=>{

  try {
    
    const {existingPassword,newPassword}=req.body 
    const foundUser=req.User

    // check the existing password is equal to original password or not
 
    const flag=await bcrypt.compare(existingPassword,foundUser.password)
    
    // if password is not correct throw an error "password not matched"
    if(!flag){

        throw new Error ("passowrd not matched")

    }

     // now check the existing password should not equal to new password

     if(existingPassword == newPassword){

        return res.status(400).json({
            sucess:false,
            message:"newPassword  should not equal to existingPassword "
        })
     }  

     // now Use validtor to make sure the new password is a strong password

     const isStrongPassword=validator.isStrongPassword(newPassword)
     if(!isStrongPassword){
        return res.status(400).json({
            sucess:false,
            message:"Make a Strong Password "
        })
        
     }

     let hashedPassword=await bcrypt.hash(newPassword,10)

     let response=await User.findByIdAndUpdate(req.ID,{password:hashedPassword},{runValidators:true})

     res.status(200).json({
        success:true,
        message:"Password changed successfully"
     })

  } catch (error) {
    
    return res.status(400).json({
        sucess:false,
        message: error.message
    })
  }

}
