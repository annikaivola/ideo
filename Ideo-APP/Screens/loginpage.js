import React, { Component } from "react";
import Logininput from "../Views/logininput.js";
import Loginbtn from "../Views/loginbtn.js";
import { View, KeyboardAvoidingView, Text, StyleSheet, TextInput, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles";

export default class Loginpage extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading2}> Log in to an Ideaspace. </Text>
      <Logininput/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Ideafeed")}
            title="Log in"
            color="#1ac5c3"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

