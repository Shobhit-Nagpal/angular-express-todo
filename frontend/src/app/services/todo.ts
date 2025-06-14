import { Injectable } from '@angular/core';
import { APIResponse } from '../types/api';
import { DeleteTodo, PostTodo, Todo, UpdateTodo } from '../types/todo';
import { APIService } from './api';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  apiService: APIService;

  constructor() {
    this.apiService = new APIService();
  }

  async getTodos() {
    try {
      const res = await this.apiService.get<APIResponse<Todo[]>>('todos');
      return res.data || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getTodo(id: number) {
    try {
      const res = await this.apiService.get<APIResponse<Todo>>(`todos/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async createTodo(todo: PostTodo) {
    try {
      const res = await this.apiService.post<APIResponse<Todo>>(`todos`, todo);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async updateTodo(todo: UpdateTodo) {
    try {
      const res = await this.apiService.put<APIResponse<Todo>>(`todos`, todo);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async deleteTodo(todo: DeleteTodo) {
    try {
      const res = await this.apiService.delete<APIResponse<Todo>>(
        `todos`,
        todo,
      );
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
