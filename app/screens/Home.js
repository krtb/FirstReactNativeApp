import React, { Component } from 'react';
// to use class component, need to import it from react
import { StatusBar } from 'react-native'

// in lessson, seperates out custom built components from 
// the react based ones by double spacing before writing.
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
    handlePressBaseCurrency = () => {
        console.log('press base');
    }

    handlePressBaseQuoteCurrency = () => {
        console.log('press quote');
    }

    handleTextChange = (text) => {
         console.log('change text', text)
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton
                    onPress={this.handlePressBaseQuoteCurrency}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
            </Container>
        );
    }
}

export default Home;