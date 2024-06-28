const express = require('express');

const routes = express.Router();

const userController = require('../controllers/user.controller');
routes.post('/user/signup', userController.SignUpuser)
routes.post('/user/login', userController.LoginUser)
module.exports = routes;