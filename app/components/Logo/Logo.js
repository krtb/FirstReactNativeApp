import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    View, Text, Keyboard, Animated, Platform, StyleSheet,
} from 'react-native';
// avove we are importing libraries/module, in order to use components that are a part of them

import styles from './styles';

// timing of animations, these are in milliseconds 
const ANIMATION_DURATION = 250;

class Logo extends Component {
    static propTypes = {
        tintColor: PropTypes.string,
    };

    // setting state here, the old fashioned way
    // creating a default state with stylings pulled from /.styles.js
    // this will be altered later on in our code
    constructor(props) {
        super(props);

        this.state = {
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }

    componentDidMount() {

        // added to check if working with IOS or ANDROID
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';

        // keyboardWillShow is not available in Android
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        // keyboardWillHide is not available in Android
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        );
    }

    componentWillUnmount() {
        // What would occur if you did not unmount your components?
        // need to research this further
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = () => {
        const { containerImageWidth, imageWidth } = this.state;


        // appears to run multiple actions in parallel
        // will always pass in an array that will contain all of the functions that
        // you want it to run.
        Animated.parallel([
            // first value passed in appears to be the value that we're going to be changing
            Animated.timing(containerImageWidth, {
                // new value that is replacing the default
                toValue: styles.$smallContainerSize,
                // also adding in how quick our animation will occur
                // this is based on the variable that we set above
                duration: ANIMATION_DURATION,
            }),
            // specifify value we want to change, second variable 
            Animated.timing(imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
        // need to tell the function to .start();
    };

    keyboardWillHide = () => {
        const { containerImageWidth, imageWidth } = this.state;

        Animated.parallel([
            Animated.timing(containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    render() {
        // why is this being set equal to state?
        const { containerImageWidth, imageWidth } = this.state;
        const { tintColor } = this.props;

        // adding the below in order to edit styling
        const containerImageStyles = [
            // adding multiple styles, adding containerImage because still want to retain those defaults
            styles.containerImage,
            // want to set the width and the height based off our animated value
            { width: containerImageWidth, height: containerImageWidth },
        ];
        const imageStyles = [
            styles.logo,
            { width: imageWidth },
            tintColor ? { tintColor } : null,
        ];

        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyles}>
                    <Animated.Image
                        resizeMode="contain"
                        style={[StyleSheet.absoluteFill, containerImageStyles]}
                        source={require('./images/background.png')}
                    />
                    <Animated.Image
                        resizeMode="contain"
                        style={imageStyles}
                        source={require('./images/logo.png')}
                    />
                </Animated.View>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;
