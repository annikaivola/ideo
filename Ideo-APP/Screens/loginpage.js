import React, { Component } from 'react';
import Logininput from '../Views/logininput.js';
import Loginbtn from '../Views/loginbtn.js';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Loginpage extends Component {

    render() {
        return (
            <View>
                <Logininput />
                <Loginbtn />
            </View>

        );
    }

}
