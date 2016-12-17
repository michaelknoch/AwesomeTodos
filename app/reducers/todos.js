import * as types from '../actions/actionTypes';

const initialState = {
    todos: ['initial', 'todos'],
};

export default function todosReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
        case types.REMOVE_TODO:
            return {
                todos: [
                    ...state.todos.slice(0, action.index),
                    ...state.todos.slice(action.index + 1),
                ],
            };
        default:
            return state;
    }
}
