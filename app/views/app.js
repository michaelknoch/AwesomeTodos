import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Swiper from 'react-native-swiper';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';
import TodosList from './todosList';
import AddTodos from './addTodos';

const store = createStore(reducers, undefined, autoRehydrate());
persistStore(store, { storage: AsyncStorage });

export default class App extends Component {

    jumpToSlide(value) {
        this.swiper.scrollBy(value); // n is the number of places to move the swipe, eg: 2, -1, etc.
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar
                    backgroundColor='black'
                    barStyle='default'
                />
                <Provider store={store}>
                    <Swiper ref={(c) => { this.swiper = c; }} showsButtons={false} loop={false} dotColor={'#545454'} activeDotColor={'#9c9c9c'}>
                        <View style={{ flex: 1, paddingTop: 25 }}>
                            <TodosList />
                        </View>
                        <View style={{ flex: 1, paddingTop: 25 }}>
                            <AddTodos swipe={slide => this.jumpToSlide(slide)} />
                        </View>
                    </Swiper>
                </Provider>

            </View>
        );
    }
}
