
import React, { Component } from "react";
import { Alert, View, Button, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styles/styles.js";

export default class RateBtn extends Component {
  _onPressButton() {
    Alert.alert("Plus vote");
  }

  render() {
    return (
      <View style={styles.ratebtndiv}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={{ height: 50, width: 50, marginRight: '4%'}}
            source={require("../Assets/images/plus.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../Assets/images/minus.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
