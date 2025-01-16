
const Todo = require('../models/todo')
const Todos = require('../models/todo')
 
const getTodos =  async() =>{

      try {
        

        const todos =   await Todos.find()
        return {todos}

      } catch (error) {
        return {error}
      }

}

const getTodosById = async(id) =>{

   try {
    
    const todos =    await Todos.findById(id) 
     
    return {todos}

   } catch (error) {
       
    return {todos: null, error}
   }


}


const createTodos = async (title, note, completed) =>{

       try {
            
      const todos  = await Todos.create({
            title,
            note, 
            completed
        })
           
       
        return {todos}
       } catch (error) {
          
        return {error: error.message}
       }

}

const  updateTodo = async(id, title, note , completed) =>{

    try {
      
        
        const todos   =  await Todos.findByIdAndUpdate(id,
            {title, note, completed},
             {new : true}
            
        )
        if (!todos) {
            return { todos: null, error: 'Todo not found' };
          }
          
         console.log(todos)
        return {todos}

    } catch (error) {
        
      console.log('error', error)
        return {todos : null, error}
    }

}


const deleteTodoById = async(id) =>{

   try {
       
     const todo = await Todos.findByIdAndDelete(id)
      
     console.log({todo})
     return  todo



   } catch (error) {
    
    return {error}
   }

}

module.exports = {

getTodos,
createTodos,
getTodosById,
updateTodo,
deleteTodoById

}