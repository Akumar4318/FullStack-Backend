
const express=require('express')
const router=express.Router()


const{getProfile}=require('../Controllers/getProfile')
const isLoggedIn = require('../Middleware/isLoggesIn')
const{editUser}=require('../Controllers/editUser')
const{editPassword}=require('../Controllers/editPassword')





router.get('/',isLoggedIn,getProfile)
router.patch('/edit',isLoggedIn,editUser)
router.patch('/edit/password',isLoggedIn,editPassword)


module.exports=router