import * as types from './actionTypes';

export const addTodo = payload => ({
    payload,
    type: types.ADD_TODO,
});

export const removeTodo = index => ({
    index,
    type: types.REMOVE_TODO,
});
