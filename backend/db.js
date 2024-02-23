const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://123cactusjuice:YVwRE8Fcd3Iiutjd@cluster0.gfnwyso.mongodb.net/TodoApp");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}