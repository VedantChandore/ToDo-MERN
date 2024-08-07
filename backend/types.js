const zod=require("zod")

const todo_validation=zod.object({
    title:zod.string(),
    description:zod.string(),
    completed:zod.boolean()
})

module.exports={todo_validation}