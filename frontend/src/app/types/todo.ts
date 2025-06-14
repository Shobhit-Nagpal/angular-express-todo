export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
}

export type PostTodo = Pick<Todo, 'title'>

export type UpdateTodo = Partial<Todo>;

export type DeleteTodo = Pick<Todo, 'id'>
