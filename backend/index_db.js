const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://vedantchandore5:pxBCPIWfF4RbOP65@clusterdemo.fox0wsn.mongodb.net/todo_app")

//Schemas
const todo_schema=new mongoose.Schema({
    title:String,
    description:String,
    completed: {
        type: Boolean,
        default: false
      }
})

const Todos=mongoose.model("Todo",todo_schema)

module.exports={
    Todos
}