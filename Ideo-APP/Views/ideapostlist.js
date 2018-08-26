import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../Styles/styles.js";
import IdeaPost from "../Views/ideapost.js";

export default class IdeaPostList extends Component {
  render() {
    return (
      <ScrollView containerStyle={{alignItems: 'center', justifyContent: 'center'}}>
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
      </ScrollView>
    );
  }
}
