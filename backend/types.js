// Zod for input validation

const zod = require("zod")

// Zod schema define
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

// Zod schema define
const updateTodo = zod.object({
    id: zod.string()
})

module.exports={
    createTodo,
    updateTodo
}