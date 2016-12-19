import * as types from './actionTypes';

export const addTodo = payload => ({
    payload,
    type: types.ADD_TODO,
});

export const removeTodo = id => ({
    id,
    type: types.REMOVE_TODO,
});
