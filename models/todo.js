const {mongoose, Schema}=require("mongoose");

const todoSchema = new Schema({
    title: String, 
    completed:{type:Boolean,default:false}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports=Todo;