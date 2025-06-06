const shortid=require('shortid')
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

const getTodos=async()=>{
    return [...todosAPI]
}
const getTodoById=async(id)=>{
    return todosAPI.find((todo)=>todo.id===id)
}
const createTodo=async(todo)=>{
    return todosAPI.push(todo)
}
const updateTodo=async(id, updates)=>{
    todosAPI=todosAPI.map((todo)=>{
        if(todo.id===id){
            return {...todo, ...updates}
        }
        return todo
    })
}

const deleteTodo=async(id)=>{
    todosAPI=todosAPI.filter((todo)=>{return todo.id!==id})
}

const todoRepo={getTodos, getTodoById,updateTodo,createTodo, deleteTodo,

}

module.exports=todoRepo