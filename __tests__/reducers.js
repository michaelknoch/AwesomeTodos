import todosReducer from '../app/reducers/todos';
import * as actions from '../app/actions';

describe('todos reducer', () => {
    const initialState = {
        todos: [{ id: 0, text: 'initial' }, { id: 1, text: 'todos' }],
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
            todos: [
                { id: 0, text: 'initial' },
                { id: 1, text: 'todos' },
                { id: 2, text: 'putzen' },
            ],
        });
    });

    it('should remove a todo', () => {
        expect(
            todosReducer(initialState, actions.removeTodo(0))
        ).toEqual({
            todos: [{ id: 1, text: 'todos' }],
        });
    });
});
