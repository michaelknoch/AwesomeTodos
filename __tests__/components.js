import React from 'react';
import renderer from 'react-test-renderer';
import SwipeList from '../app/components/swipeList';

const todos = [
    { id: 0, text: 'initial' },
    { id: 1, text: 'todos' },
];

describe('swipeList component', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <SwipeList todos={todos} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
