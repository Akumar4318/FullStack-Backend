const {User}=require('../Models/userSchema')
require('dotenv').config()

const isLoggedIn= async(req,res,next)=>{


    try {

        const {token} =req.cookies 
        const obj=jwt.verify(token,process.env.JWT_SECRET)
        const foundUser=await User.findOne({_id:obj._id})

        if(!foundUser){
            throw new Error(
                "please Logged In")
        }
        req.User=foundUser;
        next()
        
    } catch (error) {
        
        res.json({"msg":"please logged in"})
    }

}

module.exports=isLoggedIn