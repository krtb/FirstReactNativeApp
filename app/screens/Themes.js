import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    handleThemePress = (color) => {
        console.log('pressed theme', color);
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text="Blue"
                    onPress={ () => this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                />
                <Separator/>
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default Themes;
