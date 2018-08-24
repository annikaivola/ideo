import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";

export default class Createbtn extends Component {
  static navigationOptions;
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => this.props.navigation.navigate("Ideafeed")}
          title="Log in to Ideaspace"
          color="#1ac5c3"
        />
      </View>
    );
  }
}
