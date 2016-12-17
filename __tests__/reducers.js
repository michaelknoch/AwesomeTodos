import todosReducer from '../app/reducers/todos';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(
            todosReducer(undefined, {})
        ).toEqual({
            todos: ['initial', 'todos'],
        });
    });
});
