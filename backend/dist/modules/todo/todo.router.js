"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("./todo.controller"));
const todoRouter = (0, express_1.Router)();
exports.todoRouter = todoRouter;
todoRouter.get("/", todo_controller_1.default.getAllTodos);
