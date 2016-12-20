import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import SwipeList from '../components/swipeList';

import { removeTodo } from '../actions/todosActions';

import { H2 } from '../components/headlines';

class TodosList extends Component {

    render() {
        const { todos, removeTodo } = this.props;

        const style = {
            headline: {
                paddingTop: 20,
                paddingBottom: 15,
            },
        };

        return (
            <View style={{ flex: 1 }}>
                <H2 style={style.headline}>Do this, asap!</H2>
                <SwipeList todos={todos} removeTodo={removeTodo} />
            </View>
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
