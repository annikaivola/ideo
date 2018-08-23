import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Landingpage from "./Screens/landingpage.js";
import IdeaFeed from "./Screens/ideafeed.js";
import RateBtn from "./Views/ratebtn.js";

export default class App extends Component {
  render() {
    return (
      // <Landingpage />
      <IdeaFeed/>
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
