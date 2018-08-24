
import React, { Component } from 'react';
import Logininput from '../Views/logininput.js';
import Loginbtn from '../Views/loginbtn.js';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from '../Styles/styles'; 



export default class Loginpage extends Component {

    render() {
        return (
          <View>
        <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

         <Button
              onPress={() =>
                this.props.navigation.navigate('Ideafeed')
               }
              title="Log in"
              color="#1ac5c3"
            />

        </View>
        

        );
    }

}

