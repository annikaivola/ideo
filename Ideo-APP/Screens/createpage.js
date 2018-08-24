import React, { Component } from "react";
import Createinput from "../Views/createinput";
import { View, Button, StyleSheet, Alert } from "react-native";
import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import ChooseCreate from '../Views/choosecreate';
import styles from '../Styles/styles';

export default class Createpage extends Component {


  render() {
    return (
      <View>
        <Createinput />
        <Button
          onPress={() =>
            this.props.navigation.navigate('Ideafeed')
          }
          title="Log in to Ideaspace"
          color="#1ac5c3"

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

