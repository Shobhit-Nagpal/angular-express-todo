import { Component, inject, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo';
import { Todo } from '../../types/todo';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.html',
  imports: [ReactiveFormsModule],
})
export class TodoForm {
  createTodoEvent = output<Todo>();
  todoService = inject(TodoService);
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  emit(todo: Todo) {
    this.createTodoEvent.emit(todo)
  }

  async handleSubmit() {
    try {
      if (!this.todoForm.value.title) {
        alert('Title is required');
      }

      const todo = await this.todoService.createTodo({
        title: this.todoForm.value.title as string,
      });

      if (!todo) {
        alert('No todo was created');
        return;
      }

      this.emit(todo);
    } catch (err) {
      alert('Failed to create todo');
    }
  }
}
