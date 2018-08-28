import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";

export default class Description extends Component {
  render() {
    return (

      <View style={styles.container}>
      <Text style={styles.heading2}>Welcome to the Ideaspace</Text>
      <Text style={styles.heading2}>@{this.props.name}</Text>
      <View style={styles.descriptionBox}>
      <Text style={styles.description}>This Ideaspace is for: {this.props.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Ideafeed")}
            title="Let's go!"
            color="#1ac5c3"
          />
      </View>
      </View>
    );
  }
}
