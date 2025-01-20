const bcrypt = require('bcrypt');
const userModel = require('../models/auth');
 


const userRegister = async (registerData) => {
    try {
              
        // Hash the password
        const hashedPassword = await bcrypt.hash(registerData.password, 10);

        // Create a new user
        const newUser = await userModel.create({
            name: registerData.name,
            email: registerData.email,
            password: hashedPassword,
        });

        return newUser;
    } catch (error) {
        console.error("Error in user registration service:", error);
        throw error; // Let the controller handle this error
    }
};


const userLogin = async(loginData) =>{

   try {
    
    const user  =  await userModel.findOne({email: loginData.email})
  

    if(!user){
        throw new error('user not found')
    }
  
    console.log(loginData.password)
    console.log(user.password)
    const match =   await bcrypt.compare(loginData.password, user.password )  
     console.log(match)

    if (match) {
       return user;
   } else {
       throw new Error('Invalid password');
   }


   } catch (error) {
    throw error
   }
}

module.exports = {
     userRegister,
    userLogin
 };
