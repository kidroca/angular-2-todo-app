import {Component} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
    selector: 'app-root',
    providers: [TodoDataService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {}

    addTodo() {
        this.todoDataService.add(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo: Todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    removeTodo(todo: Todo) {
        this.todoDataService.deleteById(todo.id);
    }

    get todos() {
        return this.todoDataService.getAll();
    }
}
