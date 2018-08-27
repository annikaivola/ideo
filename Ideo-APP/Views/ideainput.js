import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../Styles/styles.js";

export default class IdeaInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Write your idea here!" };
  }
  render() {
    return (
        <TextInput
          style={styles.ideaInputText}
          onChangeText={(idea) => this.setState({ idea })}
          value={this.state.idea}
          multiline ={true}
          maxLength={100}
          placeholder="Write your idea here!"
          placeholderTextColor="#C0C0C0"
        />
    );
  }
}
