import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { ListView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { addTodo, removeTodo } from '../actions/todosActions';

class TodosList extends Component {

    render() {
        const { todos, removeTodo } = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(todos),
        };

        // Buttons
        const swipeoutBtns = [
            {
                text: 'Button',
                onPress: () => { console.info('dosomething'); },
            },
        ];

        const styles = StyleSheet.create({
            wrapper: {
                flex: 1,
                flexDirection: 'column',
            },
            row: {
                height: 50,
                justifyContent: 'center',
                padding: 10,
                backgroundColor: 'rgb(50,50,50)',
            },
        });

        return (
            <View style={{ flex: 1 }}>
                <ListView
                    styles={styles.wrapper}
                    dataSource={this.state.dataSource}
                    renderRow={rowData =>
                        <Swipeout left={swipeoutBtns}>
                            <View style={styles.row}>
                                <Text style={{ color: 'white' }}>{rowData}</Text>
                            </View>
                        </Swipeout>
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
    removeTodo: (index) => {
        dispatch(removeTodo(index));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList);
