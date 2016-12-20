import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

const propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
};

const styles = StyleSheet.create({
    headline: { color: 'white' },
    h1: {
        fontSize: 70,
    },
    h2: {
        fontSize: 50,
    },
    h3: {
        fontSize: 30,
    },
});

export const H1 = ({ children, style }) => (
    <Text style={[styles.headline, styles.h1, style]}>{children}</Text>
);

export const H2 = ({ children, style }) => (
    <Text style={[styles.headline, styles.h2, style]}>{children}</Text>
);

export const H3 = ({ children, style }) => (
    <Text style={[styles.headline, styles.h3, style]}>{children}</Text>
);

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
