import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { ListItem } from '../components/List';
import currencies from '../data/currencies';

const CurrencyList = () => (
    <View style={{ flex: 1 }} >
    <StatusBar translucent={false} barStyle="default" />
    <FlatList
        data={currencies}
        renderItem={({item})=> <ListItem/> }
        keyExtractor={ item => item }
    />
    </View>
);

export default CurrencyList;