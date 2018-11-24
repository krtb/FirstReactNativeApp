import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard } from 'react-native';
import styles from './styles';

class Logo extends Component {
    componentDidMount() {
        this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow)
        this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide)
    }
    
    // want to make sure we take off listener after component
    // is done
    componentWillUnmount() {

    }

    keyboardShow = () => {
        console.log('keyboard did show')
    }
    
    keyboardHide = () => {
        console.log('keyboard did hide')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')} >
                    <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={styles.text} >Currency Converter</Text>
            </View>
        );
    };
};

export default Logo;