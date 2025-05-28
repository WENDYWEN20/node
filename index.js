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
    const {title, completed} = req.body
    if(!title || !completed){return res.status(400).json({error:"Title and completed status are required"})}
    const newTodo={ id: todosAPI.length + 1, title, completed }
    todosAPI=todosAPI.push(newTodo)
    res.status(201).json(newTodo);
    })
//delete
app.delete("/todos/:id", (req,res)=>{
    const id=parseInt(req.params.id); //pass an int returns string
    todosAPI=todosAPI.filter(todo=>todo.id!== id);
    res.status(204).send()
})

//put update a todo
app.put("/todos/:id", (req,res)=>{
    const id=parseInt(req.params.id);
    const {task, completed}=req.body
    todosAPI=todosAPI.filter(todo=>todo.id!== id);
    res.status(201).json(todosAPI);
})

app.listen(port,()=>{
    console.log(`Server is running on port,${port}`)
})


