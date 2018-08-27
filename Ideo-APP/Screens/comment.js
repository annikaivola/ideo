import IdeaPost from "../Views/ideapost";
import RateBtn from "../Views/ratebtn";
import RateInput from "../Views/rateinput";
import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  Alert,
  Text
} from "react-native";
import { StackNavigator } from "react-navigation";
import Ideafeed from "./ideafeed";
import Commentpost from "../Views/commentpost";
import { styles } from "../Styles/styles";
import IdeaBtn from "../Views/ideabtn";

var DismissKeyboard = require("dismissKeyboard");

export default class AddComment extends Component {
  //navigoi submitin jälkeen takaisin ideafeediin
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View style={styles.commentPage}>
          <View style={styles.ideaAndComments}>
            <IdeaPost />
            <Commentpost />
          </View>
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            keyboardVerticalOffset={130}
          >
            <RateInput />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

