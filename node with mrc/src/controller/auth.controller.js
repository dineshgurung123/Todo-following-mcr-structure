
const authService = require('../services/auth.service')

const userRegister = async (req, res) => {

    try {

        const { name, email, password } = req.body
        const userRegister = await authService.userRegister({ name, email, password })
          

        res.status(201).json({message : "user registered", data : userRegister})


    } catch (error) { 
        return { error }

    }

}

module.exports = {
    userRegister
}