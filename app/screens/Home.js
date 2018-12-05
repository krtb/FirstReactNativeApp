import React, { Component } from 'react';
import PropTypes from 'prop-types'
// to use class component, need to import it from react
import { StatusBar, KeyboardAvoidingView } from 'react-native'

// in lessson, seperates out custom built components from 
// the react based ones by double spacing before writing.
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header'

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE =  0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    handleChangeText = (amount) => {
        // TODO: make this work with this.props.dispatch 
        console.log(changeCurrencyAmount(amount));
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
    }

    handlePressBaseQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })
    }

    // to pass action from app to redux store, done through dispatch/ this.props.dispatch
    handleSwapCurrency = () => {
        // TODO: make this work with this.props.dispatch 
        console.log(swapCurrency());
    }

    handleOptionPress = () => {
        this.props.navigation.navigate('Options');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header 
                  onPress={this.handleOptionPress}  
                />
                <KeyboardAvoidingView behavior="padding" >
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleChangeText}
                />
                <InputWithButton
                    onPress={this.handlePressBaseQuoteCurrency}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
                <LastConverted
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    date={TEMP_CONVERSION_DATE}
                    conversionRate={TEMP_CONVERSION_RATE}
                />
                <ClearButton
                    text="Reverse Currencies"
                    onPress={this.handleSwapCurrency}
                />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;