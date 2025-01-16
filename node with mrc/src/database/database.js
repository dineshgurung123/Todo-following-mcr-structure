
  const mongoose =  require('mongoose')


   const connectToDatabase = () =>{

    try {
        mongoose.connect('mongodb+srv://root:sspear54321@todosmrc.k6it0.mongodb.net/?retryWrites=true&w=majority&appName=todosmrc')
        console.log("Database connected")

      } catch (error) {
         
        console.log('err', error)
      }
   }

   module.exports = connectToDatabase