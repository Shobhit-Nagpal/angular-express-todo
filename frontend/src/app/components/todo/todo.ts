import { Component, inject, input, output } from '@angular/core';
import type { Todo as TTodo } from '../../types/todo';
import { TodoService } from '../../services/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  imports: [FormsModule],
})
export class Todo {
  todoService = inject(TodoService);
  todo = input.required<TTodo>();
  deleteTodoEvent = output<TTodo>();
  updateTodoEvent = output<TTodo>();
  todoTitle = '';
  isDone = false;
  isEditing = false;

  emit(event: string, todo: TTodo) {
    switch (event) {
      case 'delete':
        this.deleteTodoEvent.emit(todo);
        break;
      case 'update':
        this.updateTodoEvent.emit(todo);
        break;
      default:
        alert('Event not supported to emit');
    }
  }

  async handleDelete() {
    const todo = await this.todoService.deleteTodo({ id: this.todo().id });

    if (!todo) {
      alert('Could not delete todo');
      return;
    }

    this.emit('delete', todo);
  }

  async handleEdit() {
    this.isEditing = true;
    this.todoTitle = this.todo().title;
    this.isDone = this.todo().isDone;
  }

  async handleUpdate() {
    const todo = await this.todoService.updateTodo({
      id: this.todo().id,
      title: this.todoTitle,
      isDone: this.isDone,
    });

    if (!todo) {
      alert('Could not update todo');
      return;
    }

    this.emit('update', todo);

    this.isEditing = false;
  }
}
