import { NextFunction, Request, Response } from "express";

export const validateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title } = req.body;

    if (typeof title !== "string") {
      throw new Error("Title is invalid!");
    }

    if (title.length === 0) {
      throw new Error("Title is empty!");
    }

    next();
  } catch (err) {
    res.json({
      success: false,
      message: err instanceof Error ? err.message : "Error",
      data: null,
    });
  }
};

export const validateUpdateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id, title, isDone } = req.body;

    if (typeof id !== "number") {
      throw new Error("Invalid ID");
    }

    if (typeof title !== "string") {
      throw new Error("Title is invalid!");
    }

    if (title.length === 0) {
      throw new Error("Title is empty!");
    }

    if (typeof isDone !== "boolean") {
      throw new Error("isDone is invalid!");
    }

    next();
  } catch (err) {
    res.json({
      success: false,
      message: err instanceof Error ? err.message : "Error",
      data: null,
    });
  }
};

export const validateDeleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body;

    if (typeof id !== "number") {
      throw new Error("Invalid ID");
    }

    next();
  } catch (err) {
    res.json({
      success: false,
      message: err instanceof Error ? err.message : "Error",
      data: null,
    });
  }
};
