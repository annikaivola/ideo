import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChooseLogin from '../Views/chooselogin.js';
import ChooseCreate from '../Views/choosecreate.js';
import {StackNavigator} from 'react-navigation';


export default class Landingpage extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
      return (
        <View style={styles.container}>
  
  
        <Text>I D E O</Text>
        <ChooseCreate/>
        <ChooseLogin/>



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