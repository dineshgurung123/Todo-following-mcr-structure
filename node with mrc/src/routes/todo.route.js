 const express = require ('express')
const todoController = require('../controller/todo.controller')


     const todoRoutes  = express.Router()

     todoRoutes.get('/', todoController.getTodos)

     todoRoutes.post('/', todoController.createTodos)

     todoRoutes.get('/:id', todoController.getTodosById)

     todoRoutes.put('/:id', todoController.updateTodo)

     todoRoutes.delete('/:id', todoController.deleteTodoById)

     

     module.exports = todoRoutes