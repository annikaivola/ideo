import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import IdeaPostList from "../Views/ideapostlist.js";
import IdeaBtn from "../Views/ideabtn.js";
import IdeaInput from "../Views/ideainput";
import { styles } from "../Styles/styles.js";

var DismissKeyboard = require("dismissKeyboard");

export default class IdeaFeed extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View
          style={styles.feedi}
          behavior="padding"
          enabled
          containerStyle={{ alignItems: "center", justifyContent: "center" }}
        >
          <IdeaPostList />
          <KeyboardAvoidingView
            style={styles.inputDiv}
            behavior="padding"
            enabled
            keyboardVerticalOffset={70}
          >
            <IdeaInput />
            <IdeaBtn />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
