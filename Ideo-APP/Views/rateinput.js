import React, { Component } from "react";
import { View, KeyboardAvoidingView, Image, Button, TextInput } from "react-native";
import { styles } from "../Styles/styles.js";
import IdeaBtn from "./ideabtn.js";

export default class IdeaInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Write your comment here!" };
  }
  render() {
    return (
        // <View>
        <View style={styles.commentDiv}>
        <Image
            style={{ height: 30, width: 30, alignSelf: 'center', justifyContent: 'center'}}
            source={require("../Assets/images/plus.png")}/>

        <TextInput
          style={styles.commentInputText}
          onChangeText={(comment) => this.setState({ comment })}
          value={this.state.comment}
          multiline ={true}
          maxLength={100}
          placeholder="What's good about this idea?"
          placeholderTextColor="#C0C0C0"
        />
         <IdeaBtn />
         </View>
         /* <View style={styles.commentDiv}>
        <Image
            style={{ height: 30, width: 30 }}
            source={require("../Assets/images/minus.png")}/>
        <TextInput
        //   style={styles.ideaInputText}
          onChangeText={(comment) => this.setState({ comment })}
          value={this.state.comment}
          multiline ={true}
          maxLength={100}
          placeholder="What are the cons?"
          placeholderTextColor="#C0C0C0"
        />
         <IdeaBtn />
        </View> */
        // </View>
        
    );
  }
}
