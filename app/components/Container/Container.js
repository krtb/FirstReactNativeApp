import React from 'react'
import PropTypes from 'prop-types'; // ES6
// may need to npm install above, not included in latest
import { View} from 'react-native'

import styles from './styles'

const Container = ({ children, backgroundColor }) => {
    const containerStyles = [styles.container];

    if (backgroundColor) {
        containerStyles.push({ backgroundColor })
    }

    return(
        <View style={containerStyles}>
            {children}
        </View>
    );
};

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

export default Container;
