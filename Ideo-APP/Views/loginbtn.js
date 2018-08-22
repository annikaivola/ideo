import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Loginpage from '../Screens/loginpage.js';

export default class Loginbtn extends Component {
//   static navigationOptions = {
//     header:null
// };
    render() {
      return (
        <View style={styles.container}>
  
          <Button
              onPress={this._onPressButton}
              title="Log in"
              color="gray"
            />
  
  
        </View>
      );
    }
  }