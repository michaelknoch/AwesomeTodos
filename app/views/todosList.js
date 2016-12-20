import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeList from '../components/swipeList';

import { removeTodo } from '../actions/todosActions';

class TodosList extends Component {

    render() {
        const { todos, removeTodo } = this.props;

        return (
            <SwipeList todos={todos} removeTodo={removeTodo} />
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todosReducer.todos,
});

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {
        dispatch(removeTodo(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList);
