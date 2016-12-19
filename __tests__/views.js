import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodosList from '../app/views/todosList';

it('renders correctly', () => {
    const tree = renderer.create(
        <TodosList />
    ).toJSON();;
    expect(tree).toMatchSnapshot();
});
