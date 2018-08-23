import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import  StackNavigator  from 'react-navigation';
import { styles } from '../Styles/styles.js';
import Createpage from '../Screens/createpage';

// const { navigate } = this.props.navigation;

export default class ChooseCreate extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Create Ideaspace"
        onPress={() =>
          this.props.navigation.navigate('Create')
        }
            color="#1ac5c3"
          />
        </View>
      </View>
    )
  }
}

