import * as actions from '../app/actions/todosActions';
import * as types from '../app/actions/actionTypes';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const payload = 'Einkaufen gehen';
        const expectedAction = {
            payload,
            type: types.ADD_TODO,
        };
        expect(actions.addTodo(payload)).toEqual(expectedAction);
    });

    it('should create an action to remove a todo', () => {
        const id = 3;
        const expectedAction = {
            id,
            type: types.REMOVE_TODO,
        };
        expect(actions.removeTodo(id)).toEqual(expectedAction);
    });

});
