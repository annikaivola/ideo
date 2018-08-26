
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles.js";
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class IdeaBtn extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            onPress={this._onPressButton}
            style={styles.arrow}
            source={require("../Assets/images/ideo_arrow.png")}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    );
  }
}
