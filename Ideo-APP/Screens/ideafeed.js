import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  FlatList,
  keyExtractor
} from "react-native";
import IdeaPostList from "../Views/ideapostlist.js";
import IdeaBtn from "../Views/ideabtn.js";
import IdeaInput from "../Views/ideainput";
import { styles } from "../Styles/styles.js";
import Comment from "./comment";
import IdeaPost from "../Views/ideapost.js";

var DismissKeyboard = require("dismissKeyboard");

export default class IdeaFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaposts: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
  }
  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Comment")}>
      <IdeaPost />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View
          style={styles.feedi}
          containerStyle={{ alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView>
            <FlatList
              data={this.state.ideaposts}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </ScrollView>
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            keyboardVerticalOffset={65}
          >
          <IdeaInput />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
