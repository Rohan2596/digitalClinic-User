const express=require('express');
const router =express.Router();
const userController=require('../controller/user.controller')
router.post('/add',userController.addUser);
router.post('/auth',userController.authenticateUser);
router.get('/forgot',userController.forgotPassword);
router.post('/reset',userController.forgotPassword);
router.get('/detail',userController.getUserDetails);
router.get('/all',userController.getAllUserDetails);



module.exports=router
