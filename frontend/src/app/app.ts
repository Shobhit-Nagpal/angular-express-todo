import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './components/todos/todos';
import { TodoForm } from './components/todo-form/todo-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
