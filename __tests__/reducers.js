import todosReducer from '../app/reducers/todos';
import * as actions from '../app/actions'

describe('todos reducer', () => {
    const initialState = {
        todos: ['initial', 'todos'],
    };

    it('should return the initial state', () => {
        expect(
            todosReducer(undefined, {})
        ).toEqual(initialState);
    });

    it('should add a todo', () => {
        expect(
            todosReducer(initialState, actions.addTodo('putzen'))
        ).toEqual({
            todos: ['initial', 'todos', 'putzen'],
        });
    });

    it('should remove a todo', () => {
        expect(
            todosReducer(initialState, actions.removeTodo(0))
        ).toEqual({
            todos: ['todos'],
        });
    });

});
