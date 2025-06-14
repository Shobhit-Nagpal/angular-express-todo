"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("./todo.service"));
class TodoController {
    getAllTodos(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Hi?');
            try {
                const data = yield todo_service_1.default.getTodos();
                res.json({
                    success: true,
                    message: 'Fetched todos!',
                    data,
                });
            }
            catch (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: err instanceof Error ? err.message : 'Error',
                    data: null,
                });
            }
        });
    }
}
const todoController = new TodoController();
exports.default = Object.freeze(todoController);
