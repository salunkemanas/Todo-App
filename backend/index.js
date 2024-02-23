const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())

// Create a new todo
app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs"
        })
        return;
    };
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg:"Todo created"
    })
})

// Get all todos
app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})


// To set todo to completed 
app.put("/completed", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    }, {
        completed:true
    });
    res.json({
        msg:"Todo marked as completed"
    })
});

app.listen(3000, ()=>{
    console.log(`The server is started on port 3000`)
})