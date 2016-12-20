import * as types from '../actions/actionTypes';

const initialState = {
    todos: [
        { id: 0, text: 'initial' },
        { id: 1, text: 'todos' },
    ],
};

export default function todosReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_TODO:
            return addTodo(state, action.payload)
        case types.REMOVE_TODO:
            return removeTodo(state, action.payload)
        default:
            return state;
    }
}

function addTodo(state, payload) {
    const todo = {
        id: state.todos.length,
        text: payload
    };
    return {
        todos: [...state.todos, todo],
    };
}

function removeTodo(state, id) {
    const index = state.todos.map(elem => elem.id).indexOf(id);
    return {
        todos: [
            ...state.todos.slice(0, index),
            ...state.todos.slice(index + 1),
        ],
    };
}
