const express=require('express')
const router=express.Router()



// connect the controller 

const{signUpUser}=require('../Controllers/singupUser')
const{loginUser}=require('../Controllers/loginUser')
const isLoggedIn = require('../Middleware/isLoggesIn')
const {logoutUser}=require('../Controllers/logoutUser')

// const {getProfile}=require('../Controllers/getProfile')
// const{editUser}=require('../Controllers/editUser')







// mapping routes
router.post('/singup',signUpUser)
router.post('/login',loginUser)
router.get('/logout',isLoggedIn,logoutUser)
// router.get("/profile",isLoggedIn,getProfile)
// router.patch('/editprofile',isLoggedIn,editUser)



module.exports=router