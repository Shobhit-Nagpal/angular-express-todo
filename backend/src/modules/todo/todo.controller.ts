import { Request, Response } from "express";
import todoService from "./todo.service";

class TodoController {
  async getAllTodos(_req: Request, res: Response) {
    try {
      const data = await todoService.getTodos();
      res.json({
        success: true,
        message: "Fetched todos!",
        data,
      });
    } catch (err) {
      console.error(err);
      res.json({
        success: false,
        message: err instanceof Error ? err.message : "Error",
        data: null,
      });
    }
  }
  async createTodo(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const data = await todoService.createTodo(title);

      res.json({
        success: true,
        message: "Created todo!",
        data,
      });
    } catch (err) {
      console.error(err);
      res.json({
        success: false,
        message: err instanceof Error ? err.message : "Error",
        data: null,
      });
    }
  }

  async updateTodo(req: Request, res: Response) {
    try {
      const { id, title, isDone } = req.body;
      const data = await todoService.updateTodo(id, title, isDone);

      res.json({
        success: true,
        message: "Updated todo!",
        data,
      });
    } catch (err) {
      console.error(err);
      res.json({
        success: false,
        message: err instanceof Error ? err.message : "Error",
        data: null,
      });
    }
  }

  async deleteTodo(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const data = await todoService.deleteTodo(id);

      res.json({
        success: true,
        message: "Deleted todo!",
        data,
      });
    } catch (err) {
      console.error(err);
      res.json({
        success: false,
        message: err instanceof Error ? err.message : "Error",
        data: null,
      });
    }
  }
}

const todoController = new TodoController();

export default Object.freeze(todoController);
