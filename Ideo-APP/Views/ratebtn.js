import React, { Component } from "react";
import { View, Button, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styles/styles.js";

export default class RateBtn extends Component {


  render() {
    return (
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/minus.png")}
        />

        <Image
          style={{ height: 50, width: 50 }}
          source={require("../Assets/images/plus.png")}
        />
      </View>
    );
  }
}

