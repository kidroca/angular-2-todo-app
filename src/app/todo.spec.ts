import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should assign provided values', () => {
    let title = 45;
    let complete = true;

    let todo = new Todo({
      title,
      complete
    });

    expect(todo.title).toEqual(title);
    expect(todo.complete).toEqual(complete);
  });
});
