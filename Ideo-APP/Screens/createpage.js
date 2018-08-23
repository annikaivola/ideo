import React, { Component } from "react";
import Createinput from "../Views/createinput";
import { View, Button, StyleSheet, Alert } from "react-native";
import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import ChooseCreate from '../Views/choosecreate';

export default class Createpage extends Component {


  render() {
    return (
      <View>
        <Createinput />
        <Createbtn />
      </View>
    );
  }
}


