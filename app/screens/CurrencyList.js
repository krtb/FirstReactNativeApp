import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
    // wrap entire thing in a view, multiple items
    // React Native uses flexbox, would be good to learn this and use in future css
    <View style={{ flex: 1 }} >
    // data can be a plain array
    <FlatList
        data={currencies}
        // rendering items prop
        // can use array destructuring
        renderItem={({item})=> <Text> {item} </Text> }
        // because we are only returning strings, key will be the actual item that is being rendered
        keyExtractor={ item => item }
    />
    </View>
);

export default CurrencyList;