    const mongoose = require ('mongoose')

    const todoSchema  =  new  mongoose.Schema({

   title : {type : String, require:true},
   note : { type : String , require: true},
   completed : {type : Boolean, default : false}

    })

    const Todo = mongoose.model('todo', todoSchema)

    module.exports = Todo