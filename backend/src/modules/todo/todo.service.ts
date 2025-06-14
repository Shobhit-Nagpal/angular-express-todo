import todoRepository from "./todo.repository";

class TodoService {
  async getTodos() {
    const todos = await todoRepository.getTodos();
    return todos;
  }

  async createTodo(title: string) {
    const todo = await todoRepository.createTodo(title);
    return todo;
  }

  async getTodo(id: number) {
    const todo = await todoRepository.getTodo(id);
    if (!todo) {
      throw new Error('Todo does not exist');
    }

    return todo;
  }

  async updateTodo(id: number, title: string, isDone: boolean) {
    const todo = await todoRepository.updateTodo(id, title, isDone);
    if (!todo) {
      throw new Error('Todo does not exist');
    }

    return todo;
  }

  async deleteTodo(id: number) {
    const todo = await todoRepository.deleteTodo(id) 
    if (!todo) {
      throw new Error('Todo does not exist');
    }

    return todo;
  }
}

const todoService = new TodoService();

export default Object.freeze(todoService);
