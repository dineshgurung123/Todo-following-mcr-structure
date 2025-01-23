  const express = require('express')
const todoRoutes = require('./src/routes/todo.route')
const connectToDatabase = require('./src/database/database')
const { authRoutes } = require('./src/routes/auth.route')
const morgan = require('./src/config/morgan.js');


  const app = express()
 


  app.use(express.json())
   port = 3000

   connectToDatabase()

   app.use(morgan.successHandler);
   app.use(morgan.errorHandler);

   app.use('/todos', todoRoutes)
   app.use('/auth', authRoutes)


  app.listen(port, ()=>{

    console.log(`server running on port ${port}`) 
  })