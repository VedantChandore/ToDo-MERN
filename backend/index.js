const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const {todo_validation}=require("./types")
const {Todos}=require("./index_db")

const app=express()

app.use(bodyParser.json())
app.use(cors())
const port=2000



//create todo
app.post("/create-todo",async function(req,res){
    const response=todo_validation.safeParse(req.body)
    const title=req.body.title
    const description=req.body.description
    const completed=req.body.completed

    if(!response.success){
        res.status(411).json({
            error:"wrong data"
        })
    }
    await Todos.create({
        title,
        description,
        completed
    })
    res.json({
        msg:"Todo created"
    })
})

//get todos
app.get("/get-todos",async function(req,res){
    const todos=await Todos.find({})
    res.json({
        todos_list:todos
    })
})

//update todos
app.put("/completed/:id",async function(req,res){
    const completed=req.body.completed
    const todo_id=req.params.id

    if(completed){
        await Todos.findByIdAndUpdate(todo_id,{completed:true})
        const result=await Todos.findByIdAndDelete(todo_id)
        res.json({
            msg:"Todo completed",
            todo_done:result
        })
    }
    else{
        res.send("You have not completed Todo")
    }
})

app.listen(port)

