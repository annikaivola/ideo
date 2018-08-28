import React, { Component } from "../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import {
  Animated,
  Text,
  View,
  FadeInView,
  Image,
  ActivityIndicator
} from "react-native";
import { styles } from "../Styles/styles.js";

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
}
