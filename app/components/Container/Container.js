import React from 'react'
import PropTypes from 'prop-types'; // ES6
// may need to npm install above, not included in latest
import { View } from 'react-native'

import styles from './styles'

const Container = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.any
};

export default Container;
