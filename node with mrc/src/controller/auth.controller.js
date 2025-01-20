
const authService = require('../services/auth.service')

const userRegister = async (req, res) => {

    try {

        const { name, email, password } = req.body
        const {userRegister, error} = await authService.userRegister({ name, email, password })
            
        if(error){
            res.status(400).send({error})
        }

        res.status(201).json({message : "user registered", data : userRegister})
     

    } catch (error) { 
        return { error }

    }

}

const userLogin = async (req, res) => {

    try {

        const {email, password } = req.body
        const loginData = await authService.userLogin({ email, password })
        console.log(loginData)

        res.status(200).json({message : "user logged in", data : loginData})
     

    } catch (error) { 
         
        res.status(400).json({
            error : error.message
        })

    }

}


module.exports = {
    userRegister,
    userLogin

}