import { Component, inject } from '@angular/core';
import type { Todo as TTodo } from '../../types/todo';
import { TodoService } from '../../services/todo';
import { Todo } from '../todo/todo';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'todos',
  templateUrl: './todos.html',
  imports: [Todo, TodoForm],
})
export class Todos {
  todoService = inject(TodoService);
  loading = true;
  todos = new Array<TTodo>();

  onCreate(todo: TTodo) {
    this.todos.push(todo);
  }

  onDelete(deletedTodo: TTodo) {
    this.todos = this.todos.filter((todo) => todo.id !== deletedTodo.id);
  }

  onEdit(updatedTodo: TTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
  }

  async ngOnInit() {
    this.todos = await this.todoService.getTodos();
    this.loading = false;
  }
}
