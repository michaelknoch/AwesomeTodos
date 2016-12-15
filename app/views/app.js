import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Swiper from 'react-native-swiper';

import reducers from '../reducers';
import TodosList from './todosList';
import AddTodos from './addTodos';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar
                    backgroundColor='black'
                    barStyle='default'
                />
                <Provider store={store}>
                    <Swiper showsButtons={false} loop={false} activeDotColor={'black'}>
                        <View style={{ flex: 1, paddingTop: 25 }}>
                            <TodosList />
                        </View>
                        <View style={{ flex: 1, paddingTop: 25 }}>
                            <AddTodos />
                        </View>
                    </Swiper>
                </Provider>

            </View>
        );
    }
}
