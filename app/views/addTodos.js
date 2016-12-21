import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { addTodo } from '../actions/todosActions';
import { H2 } from '../components/headlines';

const propTypes = {
    swipe: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
};

class AddTodos extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        const style = {
            wrapper: {
                flex: 1,
                flexDirection: 'column',
                padding: 30,
            },
            headline: {
                paddingTop: 80,
                paddingBottom: 15,
            },
            input: {
                padding: 5,
                backgroundColor: 'white',
                height: 100,
                fontSize: 15,
            },
            button: {
                fontSize: 50,
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                marginTop: 15,
                padding: 8,
                paddingLeft: 15,
            },
        };

        const onPress = () => {
            if (!this.state.text) return;

            this.props.addTodo(this.state.text);
            this.props.swipe(-1);
            this.input.clear();
        };

        return (
            <View style={style.wrapper}>
                <H2 style={style.headline}>Whats up?</H2>
                <TextInput
                    keyboardAppearance={'dark'}
                    ref={(input) => { this.input = input; }}
                    autoFocus
                    multiline
                    style={style.input}
                    onChangeText={text => this.setState({ text })}
                />
                <TouchableHighlight onPress={onPress}>
                    <Text style={style.button}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (payload) => {
        dispatch(addTodo(payload));
    },
});

AddTodos.propTypes = propTypes;

export default connect(
    null,
    mapDispatchToProps
)(AddTodos);
