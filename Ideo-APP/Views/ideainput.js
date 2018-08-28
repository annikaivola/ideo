import React, { Component } from "react";
import { View, Button, TextInput, KeyboardAvoidingView} from "react-native";
import { styles } from "../Styles/styles.js";
import IdeaBtn from "../Views/ideabtn.js";

export default class IdeaInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Write your idea here!" };
  }
  render() {
    return (
      <View  
      style={styles.commentDiv}>
      <View style={styles.ideaInputandButton}>
        <TextInput
          style={styles.ideaInputText}
          onChangeText={(idea) => this.setState({ idea })}
          value={this.state.idea}
          multiline ={true}
          maxLength={100}
          placeholder="Write your idea here!"
          placeholderTextColor="#C0C0C0"
        />
         <IdeaBtn />
         </View>
         </View>
          
    );
  }
}
