import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

class Themes extends Component {
    handleThemePress = () => {
        console.log('pressed theme');
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text="Blue"
                    handleThemePress={this.handleThemePress}
                />
            </ScrollView>
        );
    }
}

export default Themes;
