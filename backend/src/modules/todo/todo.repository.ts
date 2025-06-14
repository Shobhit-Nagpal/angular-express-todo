import db from "../db";
import { Todo } from "./todo.model";

class TodoRepository {
  async getTodos(): Promise<Todo[]> {
    const result = await db.query("SELECT * FROM todos;");
    return result.rows.map(this.mapTodo);
  }

  async createTodo(title: string): Promise<Todo> {
    const result = await db.query(
      "INSERT INTO todos (title, is_done) VALUES ($1, $2) RETURNING *",
      [title, false],
    );
    return this.mapTodo(result.rows[0]);
  }

  async getTodo(id: number): Promise<Todo | null> {
    const result = await db.query("SELECT * FROM todos WHERE $id=$1", [id]);
    if (result.rows.length === 0) {
      return null;
    }

    return this.mapTodo(result.rows[0]);
  }

  async updateTodo(
    id: number,
    title: string,
    isDone: boolean,
  ): Promise<Todo | null> {
    const result = await db.query(
      "UPDATE todos SET title = $1, is_done = $2 WHERE id = $3 RETURNING *;",
      [title, isDone, id],
    );
    if (result.rows.length === 0) {
      return null;
    }

    return this.mapTodo(result.rows[0]);
  }

  async deleteTodo(id: number): Promise<Todo | null> {
    const result = await db.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *;",
      [id],
    );
    if (result.rows.length === 0) {
      return null;
    }

    return this.mapTodo(result.rows[0]);
  }

  private mapTodo(row: any): Todo {
    return {
      id: row.id,
      title: row.title,
      isDone: row.is_done,
      createdAt: row.created_at,
    };
  }
}

const todoRepository = new TodoRepository();

export default Object.freeze(todoRepository);
