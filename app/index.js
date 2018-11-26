import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'

// need to install this package!
import CurrencyList from './screens/CurrencyList';

// here is where global styles are contained
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
});

export default () => <CurrencyList />;