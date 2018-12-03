import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';

class Options extends Component {
    handleThemesPress = () => {
        console.log("pressed theme!");
    }

    handleSitePress = () => {
        console.log("press site");
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" /> 
                <ListItem
                    text="themes"
                    onPress={this.handleThemesPress}
                />
                <Separator/>
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                />
            </ScrollView>
        );
    }
}

export default Options;