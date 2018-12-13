import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View, StatusBar } from 'react-native';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
// need to make sure that we have 'this.props.dispatch' available to our currency list component
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }

    // need to make the 'currency' variable available, pass it in to your function
    handlePress = (currency) => {
        // want to determine which action should be called inside of this function
        // type being passed via navigation params
        const { type } = this.props.navigation.state.params;

        if (type === 'base') {
            // TODO: Dispatch change base\
            // want to pass what currency is being changed, so we pass that to our dispatch function
            this.props.dispatch(changeBaseCurrency(currency))
        } else if (type === 'quote' )  {
            // TODO: Dispatch change quote
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        this.props.navigation.goBack(null);
    };

    render() {
        return(
    <View style={{ flex: 1 }} >
    <StatusBar translucent={false} barStyle="default" />
    <FlatList
        data={currencies}
        renderItem={({item})=>( <ListItem
            text={item}
            selected={item === TEMP_CURRENT_CURRENCY}
            // item being passed in is the currency that is changing
            onPress={() => this.handlePress(item)}
        /> )}
        keyExtractor={ item => item }
        ItemSeparatorComponent={Separator}
    />
    </View>
        );
    }
};

export default connect()(CurrencyList);