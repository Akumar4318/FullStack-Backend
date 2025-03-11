const express=require('express')
const router=express.Router()



// connect the controller 


const {logoutUser}=require('../Controllers/logoutUser')
const isLoggedIn = require('../Middleware/isLoggesIn')
const {getProfile}=require('../Controllers/getProfile')
const{editUser}=require('../Controllers/editUser')







// mapping routes

router.get('/logout',isLoggedIn,logoutUser)
router.get("/profile",isLoggedIn,getProfile)
router.patch('/editprofile',isLoggedIn,editUser)



module.exports=router