const Todo = require('../models/todo')
const todoService = require('../services/todo.services')



const getTodos = async(req, res) =>{
   
       
       
          try {
            
          const todos  = await todoService.getTodos()

            return res.status(200).json({todos})
          } catch (error) {
             
              return {todos : null , error}
          }

}


const getTodosById = async(req, res) =>{


       try {

          const {id} = req.params
        
          const todos = await todoService.getTodosById(id)
         

          return res.status(200).json({todos})

       } catch (error) {
        return {error}
        
       }


}

const createTodos =  async(req, res) =>{
   
    try {
            const {title, note, completed } =  req.body
                 if(!title){

                   return res.status(400).send("Title cant be empty")
                 }

              const {todos, error} =   await todoService.createTodos(title, note, completed)
              if(error){
                return res.status(500).send({error})
              }
              console.log(todos)

              res.status(201).json( {messaage : "Todo created", todos})

    } catch (error) {
          

        return res.send(error)
    }
 

}


const updateTodo = async(req, res) =>{

       try {
        const {title, note, completed} = req.body
        
        const {id} = req.params
          
          const {todos, error} = await todoService.updateTodo(id, title, note, completed)
   
          if(error){
   
           console.log(error)
          }
                
         return res.status(200).json({messaage: "Todo update" , todos})
   
   
       } catch (error) {
        return res.status(500).send(error)
       }
}


const deleteTodoById = async(req, res) =>{
  try {
   
    const {id} = req.params
      
      const todos = await todoService.deleteTodoById(id)

     
            
     return res.status(200).json({message: "Todo deleted" , todos})


   } catch (error) {
    return res.status(500).send(error)

   }


}


module.exports = {

    getTodos,
    createTodos,
    getTodosById,
    updateTodo,
    deleteTodoById
}