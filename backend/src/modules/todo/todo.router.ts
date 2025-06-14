import { Router } from "express";
import todoController from "./todo.controller";
import { validateDeleteTodo, validateTodo, validateUpdateTodo } from "./todo.validation";

const todoRouter = Router();

todoRouter.get("/", todoController.getAllTodos);
todoRouter.get("/:id", todoController.getTodo);
todoRouter.post("/", validateTodo, todoController.createTodo)
todoRouter.put("/", validateUpdateTodo, todoController.updateTodo)
todoRouter.delete("/", validateDeleteTodo, todoController.deleteTodo)

export { todoRouter };
