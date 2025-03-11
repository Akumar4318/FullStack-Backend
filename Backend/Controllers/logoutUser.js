
const User=require('../Models/userSchema')


exports.logoutUser= async(req,res)=>{

    try {
       
        res.cookie("token",null)
        res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}