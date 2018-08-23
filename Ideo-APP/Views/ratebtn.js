<<<<<<< HEAD
import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../Styles/styles.js";

export default class RateBtn extends Component {
  static navigationOptions = {
    header: null
  };
  onPressPlus() {
    Alert.alert("Plus vote!");
  }
  onPressPlus() {
    Alert.alert("Minus vote");
  }

  render() {
    return (
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/minus.png")}
        //   onPress={this._onPressButton}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/plus.png")}
        //   onPress={this._onPressButton}
        />
      </View>
    );
  }
}
=======
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Createbtn extends Component {

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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
>>>>>>> sara
