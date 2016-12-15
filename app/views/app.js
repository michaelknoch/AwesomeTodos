import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import TodosList from './todosList';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='black'
                    barStyle='default'
                />
                <Provider store={store}>
                    <View style={{ flex: 1, paddingTop: 25 }}>
                        <TodosList />
                    </View>
                </Provider>
            </View>
        );
    }
}
