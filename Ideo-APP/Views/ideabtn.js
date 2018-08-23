import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";

export default class IdeaBtn extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            onPress={this._onPressButton}
            style={styles.arrow}
            source={require("../Assets/images/arrow2.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
