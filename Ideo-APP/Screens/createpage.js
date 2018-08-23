import React, { Component } from "react";
import Createinput from "../Views/createinput";
import { View, Button, StyleSheet, Alert } from "react-native";
import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import Nav from "../config/router.js";

export default class Createpage extends Component {
  // static navigationOptions = {
  //     header:null
  // };
  render() {
    return (
      <View>
        <Createinput />
        <Createbtn />
      </View>
    );
  }
}
<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
=======
>>>>>>> sara
