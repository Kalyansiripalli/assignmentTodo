const express=require("express");
const Todo = require("../models/todo");
const router=express.Router();

// fetching all todos
router.get("",async (req,res)=>{
    try {
        const result=await MyModel.find({});
        res.send(result)

    } catch (error) {
        res.status(500).send("unable to fech data from db")
    }
});

// creating todo
router.post("",(req,res)=>{
    const todo=new Todo({
        title: req.body.title,
        completed: req.body.completed
    })
    try {
        const newTodo=todo.save();
        console.log("created new todo");
        res.status(200).send(newTodo)
    } catch (error) {
        res.status(500).send("unable to add data to db")
    }
});

module.exports=router;