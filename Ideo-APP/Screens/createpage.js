import React, { Component } from "react";
import Createinput from "../Views/createinput";
import { View, Button, KeyboardAvoidingView, StyleSheet, Alert, Text } from "react-native";
import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import ChooseCreate from "../Views/choosecreate";
import { styles } from "../Styles/styles";

export default class Createpage extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading1}>Let's brainstorm! </Text>
        <Text style={styles.heading2}> First create an Ideaspace. </Text>
        <Createinput/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Ideafeed")}
            title="Log in to Ideaspace"
            color="#1ac5c3"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
