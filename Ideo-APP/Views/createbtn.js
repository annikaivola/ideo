import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from '../Styles/styles.js'

export default class Createbtn extends Component {
static navigationOptions 
    render() {
      return (
        <View style={styles.container}>
  
  <Button
              onPress={this._onPressButton}
              title="Create"
              color="gray"
            />
  
        </View>
      );
    }
  }
}

