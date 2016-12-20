import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

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

class SwipeList extends Component {

    render() {
        const { removeTodo } = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos),
        };

        const renderRow = (rowData) => {
            const swipeoutBtns = [
                {
                    text: 'X',
                    backgroundColor: '#e74c3c',
                    onPress: () => {
                        this.props.removeTodo(rowData.id);
                    },
                },
            ];

            return (
                <Swipeout backgroundColor={'rgb(50,50,50)'} autoClose left={swipeoutBtns}>
                    <View style={styles.row}>
                        <Text style={{ color: 'white' }}>{rowData.text}</Text>
                    </View>
                </Swipeout>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <ListView
                    styles={styles.wrapper}
                    dataSource={this.state.dataSource}
                    renderRow={renderRow}
                />
            </View>
        );
    }
}

export default SwipeList;
