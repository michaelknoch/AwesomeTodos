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

    it('should remove a todo', () => {
        expect(
            todosReducer(initialState, actions.removeTodo(0))
        ).toEqual({
            todos: [{ id: 1, text: 'todos' }],
        });
    });
});
