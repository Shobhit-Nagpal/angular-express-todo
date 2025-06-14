"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const todo_router_1 = require("../todo/todo.router");
const appRouter = (0, express_1.Router)();
exports.appRouter = appRouter;
appRouter.use('/todos', todo_router_1.todoRouter);
