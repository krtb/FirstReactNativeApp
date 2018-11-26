import React from 'react';
import { Text, FlatList } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
    // data can be a plain array
    <FlatList
        data={currencies}
        // rendering items prop
        // can use array destructuring
        renderItem={({item})=> <Text> {item} </Text> }
    />
);

export default CurrencyList;