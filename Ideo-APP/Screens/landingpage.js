import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { styles } from "../Styles/styles.js";

export default class Landingpage extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.LPcontainer}>
        <Image
          style={{ height: 140, width: 150 }}
          source={require("../Assets/images/lightbulb2.png")}
          resizeMode="contain"
        />
        <Image
          style={{ height: 200, width: 300 }}
          source={require("../Assets/images/ideo_logo2.png")}
          resizeMode="contain"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Create Ideaspace"
            onPress={() => this.props.navigation.navigate("Create")}
            color='#1ac5c3'
          /></View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Loginpage")}
            title="Log in to Ideaspace"
            color='#1ac5c3'
          /></View>
        <View style={styles.helpButtonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}>
            <Icon name="help" size={28} color={'#fff'} /></TouchableOpacity>
        </View>
      </View>
    );
  }
}
