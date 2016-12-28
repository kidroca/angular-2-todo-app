import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  add(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);

    return this;
  }

  deleteById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateById(id: number, values: Object = {}): Todo {
    let todo = this.getById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }

  getById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  getAll(): Todo[] {
    return this.todos.slice();
  }

  toggleTodoComplete(todo: Todo): Todo {
    return this.updateById(todo.id, {
      complete: !todo.complete
    });
  }
}
