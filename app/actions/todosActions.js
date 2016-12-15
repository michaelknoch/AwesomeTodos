import * as types from './actionTypes';

export const addTodo = payload => ({
    payload,
    type: types.ADD_TODO,
});

export const removeTodo = _id => ({
    _id,
    type: types.REMOVE_TODO,
});
