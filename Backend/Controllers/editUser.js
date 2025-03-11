const User=require('../Models/userSchema')

exports.editUser= async(req,res)=>{

    try {
        
        const {firstName,lastName,username,DOB,interests}=req.body
        const id=req.id
        const response=await User.findByIdAndUpdate({_id:id},{firstName,lastName,username,DOB,interests},{runValidator:true})

        res.status(200).json({
            success:true,
            message:"user Updated successfully"
        })

    } catch (error) {
     
        res.status(500).json({
            success:true,
            message:error.message
        })
    }
}