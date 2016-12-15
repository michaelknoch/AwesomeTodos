import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { addTodo, removeTodo } from '../actions/todosActions';

class TodosList extends Component {

    render() {
        const { todos, addTodo, removeTodo } = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(todos),
        };

        const onPress = () => {
            addTodo('test');
        };

        const styles = StyleSheet.create({
            wrapper: {
                flex: 1,
                flexDirection: 'column',
            },
            row: {
                height: 50,
                justifyContent: 'center',
                padding: 10,
                backgroundColor: '#F6F6F6',
            },
        });

        return (
            <View style={{ flex: 1 }}>
                <TouchableHighlight onPress={onPress}>
                    <ListView
                        styles={styles.wrapper}
                        dataSource={this.state.dataSource}
                        renderRow={rowData =>
                            <View style={styles.row}>
                                <Text>{rowData}</Text>
                            </View>
                        }
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
    addTodo: (payload) => {
        dispatch(addTodo(payload));
    },
    removeTodo: (index) => {
        dispatch(removeTodo(index));
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList);
