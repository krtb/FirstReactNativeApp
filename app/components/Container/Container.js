import React from 'react'
import PropTypes from 'prop-types'; // ES6
// may need to npm install above, not included in latest
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import styles from './styles'

const Container = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() } >
        <View style={styles.container}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
    children: PropTypes.any
};

export default Container;
