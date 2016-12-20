import React from 'react';
import renderer from 'react-test-renderer';

import SwipeList from '../app/components/swipeList';
import { H1, H2, H3 } from '../app/components/headlines';

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

describe('headlines', () => {
    it('should render H1 correctly', () => {
        const tree = renderer.create(
            <H1>headline 1</H1>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render H2 correctly', () => {
        const tree = renderer.create(
            <H2>headline 2</H2>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render H3 correctly', () => {
        const tree = renderer.create(
            <H3>headline 3</H3>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
