const express = require ('express')
const authController = require('../controller/auth.controller')
 
const validate = require('../middleware/validate')
const  authValidation = require('../validations/auth.validation')

 const authRoutes = express.Router()


 authRoutes.post('/register', validate(authValidation.registerSchema),  authController.userRegister )

 authRoutes.post('/login', validate(authValidation.loginSchema),  authController.userLogin)
 authRoutes.post('/logout', (req, res)=>{

 })

 module.exports  = {
    authRoutes
 }