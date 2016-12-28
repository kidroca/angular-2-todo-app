/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

let todoService: TodoDataService;

describe('TodoDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoDataService]
        });
    });

    beforeEach(inject([TodoDataService], (service: TodoDataService) => {
        todoService = service;
    }));

    it('should ...', () => {
        expect(todoService).toBeTruthy();
    });

    describe('#getAll()', () => {

        it('Should initialize with an empty array', () => {
            expect(todoService.getAll()).toEqual([]);
        });

        it('Should return added todos', () => {
            let todo1 = new Todo({title: 'todo1'});
            let todo2 = new Todo({title: 'todo2', complete: true});

            todoService
                .add(todo1)
                .add(todo2);

            expect(todoService.getAll()).toEqual([todo1, todo2]);
        });
    });

    describe('#add(todo)', () => {

        it('Should automatically assign an incrementing `id`', () => {
            let todo1 = new Todo({title: 'todo1'});
            let todo2 = new Todo({title: 'todo2', complete: true});

            todoService
                .add(todo1)
                .add(todo2);

            expect(todo1.id).toEqual(1);
            expect(todo2.id).toEqual(2);
        });
    });

    describe('#deleteById(id)', () => {

        it('Should remove todo by corresponding id', () => {
            let todo1 = new Todo({title: 'todo1'});
            let todo2 = new Todo({title: 'todo2', complete: true});

            todoService
                .add(todo1)
                .add(todo2);

            todoService.deleteById(1);
            expect(todoService.getAll()).toEqual([todo2]);

            todoService.deleteById(2);
            expect(todoService.getAll()).toEqual([]);
        });

        it('Should not remove anything if nothing is found by id', () => {

            let todo1 = new Todo({title: 'todo1'});
            let todo2 = new Todo({title: 'todo2', complete: true});

            todoService
                .add(todo1)
                .add(todo2);

            todoService.deleteById(5);

            expect(todoService.getAll()).toEqual([todo1, todo2]);
        });
    });

    describe('#updateById(id, values)', () => {

        it('Should return todo with the given id and updated data', () => {
            let todo1 = new Todo({title: 'todo1'});
            todoService.add(todo1);

            let title = 'updated todo';
            let updated = todoService.updateById(1, {title});

            expect(updated.title).toEqual(title);
        });

        it('Should return null if no todo is found', () => {
            let todo1 = new Todo({title: 'todo1'});
            todoService.add(todo1);

            let updated = todoService.updateById(2, {title: 'updated'});

            expect(updated).toEqual(null);
        });
    });

    describe('#toggleTodoComplete(todo)', () => {

        it('Should toggle the todo complete status', () => {
            let todo1 = new Todo({title: 'todo1'});
            todoService.add(todo1);

            todoService.toggleTodoComplete(todo1);
            expect(todo1.complete).toEqual(true);

            todoService.toggleTodoComplete(todo1);
            expect(todo1.complete).toEqual(false);
        });
    });
});
