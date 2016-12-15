/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/views/app';

export default class AwesomeTodos extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('AwesomeTodos', () => AwesomeTodos);
