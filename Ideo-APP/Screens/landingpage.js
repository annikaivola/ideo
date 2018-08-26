import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import ChooseLogin from "../Views/chooselogin.js";
import ChooseCreate from "../Views/choosecreate.js";
import IdeaInput from "../Views/ideainput.js";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";

export default class Landingpage extends Component {
  static navigationOptions={
    header:null
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
          color= '#1ac5c3'
        /></View>
        <View style={styles.buttonContainer}>
        <Button
          onPress={() => this.props.navigation.navigate("Loginpage")}
          title="Log in to Ideaspace"
          color= '#1ac5c3'
        /></View>
      </View>
    );
  }
}
