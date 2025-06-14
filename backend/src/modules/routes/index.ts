import { Router } from "express";
import { todoRouter } from "../todo/todo.router";

const appRouter = Router();

appRouter.use('/todos', todoRouter)

export {
  appRouter
};
