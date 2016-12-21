import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { removeTodo } from '../actions/todosActions';
import SwipeList from '../components/swipeList';
import { H2 } from '../components/headlines';

const propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

const TodosList = props => {
    const style = {
        headline: {
            paddingTop: 20,
            paddingBottom: 15,
        },
    };

    return (
        <View style={{ flex: 1 }}>
            <H2 style={style.headline}>Do this, asap!</H2>
            <SwipeList todos={props.todos} removeTodo={props.removeTodo} />
        </View>
    );
};

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

TodosList.propTypes = propTypes;
