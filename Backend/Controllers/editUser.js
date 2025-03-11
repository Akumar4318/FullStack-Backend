const User=require('../Models/userSchema')
const validator = require("validator")
exports.editUser= async(req,res)=>{

    try {
        
        const {firstName,lastName,username,DOB,interests}=req.body
        console.log(firstName,lastName,username,DOB,interests)
        const id=req.ID
        console.log(id)
        const response=await User.findByIdAndUpdate({_id:id},{firstName,lastName,username,DOB,interests},{runValidators:true})
// here run validator use because during the schema validation occurs only when we create the user but while updating the data that validation doesnot work to enable validation we going to use runvalidators

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