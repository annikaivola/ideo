import React, {Component} from 'react';
import Logininput from '../Views/logininput.js';
import Loginbtn from '../Views/loginbtn.js';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Nav from '../config/router.js';


export default class Loginpage extends Component {
    static navigationOptions = ({navigation}) => ({
        header:null,
        title: 'Loginpage'
    }); 
    render() {
      return (


          <Loginbtn/>

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