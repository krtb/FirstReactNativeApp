import React from 'react';
import Home from './screens/Home';
// need to install this package!
import EStyleSheet from 'react-native-extended-stylesheet'

// here is where global styles are contained
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
});

export default () => <Home/>