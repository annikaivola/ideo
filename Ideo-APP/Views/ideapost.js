
import React, { Component } from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from './ideainput';

export default class IdeaPost extends Component {
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View style={styles.ideapost}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.IdeaPostText}>"Ask Help from the unicorns"</Text>
        </TouchableOpacity>
        <RateBtn />
      </View>
    );
  }
}
