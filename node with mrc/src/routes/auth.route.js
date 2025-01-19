const express = require ('express')
const authController = require('../controller/auth.controller')


 const authRoutes = express.Router()


 authRoutes.post('/register', authController.userRegister )

 authRoutes.post('/login', (req, res)=>{


 } )



 authRoutes.post('/logout', (req, res)=>{



 })

 module.exports  = {
    authRoutes
 }