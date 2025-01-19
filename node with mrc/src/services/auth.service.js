const bcrypt = require('bcrypt');
const userModel = require('../models/auth');
 
const isValidEmail = (email) =>{
   
  const emailRegex = /^[a-zA-Z0-9] + @[a-z]+ \.[a-z]{2,}$/
    return emailRegex.test(email)

}

const userRegister = async (registerData) => {
    try {
        // Check if the email already exists

         if(!(isValidEmail(registerData.email))){

          return {error : "Invalid email format"}
         }

        const existingEmail = await userModel.findOne({ email: registerData.email });
        if (existingEmail) {
            return { error: "User with the email already exists" };
        }

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

module.exports = { userRegister };
