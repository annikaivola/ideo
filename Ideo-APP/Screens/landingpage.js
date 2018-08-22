import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'; 
import Createpage from './createpage.js';
import Loginpage from './loginpage.js';
import Nav from '../config/router.js';

export default class Landingpage extends Component {
    // static navigationOptions = {
    //     header:null
    // };
    render() {

      return (
        <View>
            {/* <Button 
              onPress={() =>
                Nav.navigation.navigate('Loginpage')}
              title="Log in to Ideaspace"
              color="gray"
            />
            <Button 
              onPress={() =>
                Nav.navigation.navigate('Loginpage')}
              title="Log in to Ideaspace"
              color="gray"
            /> */}
            <Nav/>
        </View>
      );

    }
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });