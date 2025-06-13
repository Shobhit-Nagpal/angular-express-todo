import { Router } from "express";
import { todoRouter } from "../todo/todo.route";

const appRouter = Router();

appRouter.use('/todos', todoRouter)

export {
  appRouter
};
