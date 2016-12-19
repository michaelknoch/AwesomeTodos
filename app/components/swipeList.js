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

    renderRow(rowData) {
        const swipeoutBtns = [
            {
                text: 'Delete',
                onPress: () => {
                    debugger;
                    console.info(rowData.id);
                },
            },
        ];

        return (
            <Swipeout left={swipeoutBtns}>
                <View style={styles.row}>
                    <Text style={{ color: 'white' }}>{rowData}</Text>
                </View>
            </Swipeout>
        );
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos),
        };


        return (
            <View style={{ flex: 1 }}>
                <ListView
                    styles={styles.wrapper}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

export default SwipeList;
