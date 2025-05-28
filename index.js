const express=require('express')
const app=express()
const port=4000
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.get("/", (req,res)=>{
    res.send({
        "Welcome": "express.js"

    })
})

let todosAPI=[
    {
        "id": 1,
        "title": "Buy groceries",
        "completed": false
    },
    {
        "id": 2,
        "title": "Walk the dog",
        "completed": true
    },
    {
        "id": 3,
        "title": "Read a book",
        "completed": false
    }
]

app.get("/todos", (req,res)=>{
    // res.send(todosAPI)
    res.json(todosAPI)
    })
app.get("/todos/:id", (req,res)=>{
    console.log(req.params.id)
    const id=parseInt(req.params.id);
        res.json(todosAPI.find((todo)=>todo.id===id))
        })
app.post("/todos", (req,res)=>{
    const {title} = req.body
    if(!title || typeof title !=="string"){return res.status(400).json({error:"title is required and must be a string"})}
    const newTodo={ id: todosAPI.length + 1, title, completed:false }
    todosAPI.push(newTodo)
    res.status(201).json(newTodo);
    })
//delete
app.delete("/todos/:id", (req,res)=>{
    const id=parseInt(req.params.id); //pass an int returns string
    todosAPI=todosAPI.filter(todo=>todo.id!== id);
    res.status(204).send()
})

//put update a todo by id
app.put("/todos/:id", (req,res)=>{
    const id=parseInt(req.params.id);
    const {title, completed}=req.body
    const todoEdit=todosAPI.find(todo=>todo.id=== id);
    if(!todoEdit){
        return res.status(404).json({error: "Todo not found"})
    }
    if(!title || typeof title!=="string"){
        return res.status(404).json({error: "title is needed and title must be string"})
    }
    if(!completed || typeof completed !=="boolean"){
        return res.status(404).json({error: "completed status is needed and completed status  must be true or false"})
    }
    todoEdit.title=title
    todoEdit.completed=completed
    res.json(todoEdit);
})

app.listen(port,()=>{
    console.log(`Server is running on port,${port}`)
})


