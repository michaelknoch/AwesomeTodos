import * as types from './actionTypes';

export const addTodo = payload => ({
    payload: { text: payload, id: Math.round(Math.random() * 100000000) },
    type: types.ADD_TODO,
});

export const removeTodo = id => ({
    id,
    type: types.REMOVE_TODO,
});
