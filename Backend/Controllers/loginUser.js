
const User=require('../Models/userSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

exports.loginUser=async(req,res)=>{

    //? fetch all data 
    

    try {
        const {emailId,password}=req.body 
      
        //? validate the email and password
        if(!emailId || !password){
           return  res.status(400).json({
                success:false,
                message:"Enter the all credential"
            })
        }

        
        let foundUser= await User.findOne({emailId})
       

        if(!foundUser){
            return res.status(400).json({
                success:false,
                message:"first SignUP"
            })
        }

        // verify the use password

      
        if(await bcrypt.compare(password,foundUser.password)){
                
            let token=jwt.sign({_id:foundUser._id},process.env.JWT_SECRET,{
                expiresIn:"4h"
            })
            
            let options={
                expires:new Date(Date.now()+3*60*60*1000),
                
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                message:"user logged in Successfully"
            })
        }
    } catch (error) {
        
        return res.status(400).json({
            success:false,
            message:"someting error while login User",
            data:error.message
        })
    }
}