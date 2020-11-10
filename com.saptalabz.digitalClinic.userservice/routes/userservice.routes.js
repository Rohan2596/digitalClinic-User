const express=require('express');
const router =express.Router();
const userController=require('../controller/user.controller')
router.post('/add',userController.addUser)
router.post('/auth',userController.authenticateUser)
router.get('/forgot')
router.post('/reset')
router.get('/all')



module.exports=router
