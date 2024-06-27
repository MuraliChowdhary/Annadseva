const express=require('express');
const userController=require('../controllers/UserController');
const routes=express.Router();
routes.post('/user/signup',userController.SignUpuser)
routes.post('/user/login',userController.LoginUser)
module.exports=routes;