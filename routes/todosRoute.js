const { Router } = require("express");
const shortid = require("shortid");

const router = Router();

router.get("/", (req,res)=>{
    res.send({
        "Welcome": "express.js"
    })
})

let todosAPI=[
    {
        "id": shortid.generate(),
        "title": "Buy groceries",
        "completed": false
    },
    {
        "id": shortid.generate(),
        "title": "Walk the dog",
        "completed": true
    },
    {
        "id": shortid.generate(),
        "title": "Read a book",
        "completed": false
    }
]

router.get("/todos", (req,res)=>{
    // res.send(todosAPI)
    res.json(todosAPI)
    })
router.get("/todos/:id", (req,res)=>{
    console.log(req.params.id)
    const {id}=req.params;
    const todo=todosAPI.find((todo)=>todo.id===id)
    if(!todo){
        return res.status(404).json({error: "Todo not found"})
    }
    res.json(todo)
    })
router.post("/todos", (req,res)=>{
    const {title} = req.body
    if(!title || typeof title !=="string"){return res.status(400).json({error:"title is required and must be a string"})}
    const newTodo={ id: todosAPI.length + 1, title, completed:false }
    todosAPI.push(newTodo)
    res.status(201).json(newTodo);
    })
//delete
router.delete("/todos/:id", (req,res)=>{
    const {id}=req.params;
    todosAPI=todosAPI.filter(todo=>todo.id!== id);
    res.status(204).send()
})

//put update a todo by id
router.put("/todos/:id", (req,res)=>{
    const {id}=req.params;
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

module.exports=router
