import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { View, Text, TouchableHighlight } from 'react-native';

const ListItem = ({ text, onPress, selected}) => (
    <TouchableHighlight onPress={onPress} >
        <View>
            <Text>{text}</Text>
            {selected ? <Text> Selected! </Text> : null}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool
}

export default ListItem;