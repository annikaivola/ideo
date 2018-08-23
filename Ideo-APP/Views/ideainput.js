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
      <View style={styles.ideaInput}>
        <TextInput
          style={styles.ideaInputText}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
