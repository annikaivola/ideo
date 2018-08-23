import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../Styles/styles.js";

export default class RateBtn extends Component {
  static navigationOptions = {
    header: null
  };
  onPressPlus() {
    Alert.alert("Plus vote!");
  }
  onPressPlus() {
    Alert.alert("Minus vote");
  }

  render() {
    return (
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/minus.png")}
        //   onPress={this._onPressButton}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/plus.png")}
        //   onPress={this._onPressButton}
        />
      </View>
    );
  }
}
