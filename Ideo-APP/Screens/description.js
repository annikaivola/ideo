import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";


export default class Description extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const activeIdeaspace = navigation.getParam("activeIdeaspace", "...");
  
  this.state = {
    activeIdeaspace,
    description: activeIdeaspace.description,
    name: activeIdeaspace.name,
    isLoading: false,
  }
}

  render() {
    return (

      <View style={styles.container}>
      <Text style={styles.heading2}>Welcome to the Ideaspace</Text>
      <Text style={styles.space}>@{this.state.name}</Text>
      <View style={styles.descriptionBox}>
      <Text style={styles.description}>This Ideaspace is for:</Text>
      <Text style={styles.description2}>{this.state.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Ideafeed",{
              activeIdeaspace: this.state.activeIdeaspace})}
            title="Let's go!"
            color="#1ac5c3"
          />
      </View>
      </View>
    );
  }
  }

