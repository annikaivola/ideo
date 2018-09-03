import React, { Component } from "react";
import { getIdeas, addNewIdea } from "./ServiceDesk.js";
import { Alert, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styles/styles.js";
import IdeaBtn from "../Views/ideabtn.js";
//tämä komponentti ei ole käytössä
export default class IdeaInput extends Component {
  state = {
    idea1: " ",
    ideaspaceId: this.props.activeIdeaspace
  };
  constructor(props) {
    super(props);
    this.addIdea = this.addIdea.bind(this);
    this.sendIdea = this.sendIdea.bind(this);
  }

  ideaChanged = (e) => this.setState({idea1: e.target.value});

  addIdea = (state) => {
    addNewIdea(state, function (response) {
      if(!response.ok){
        Alert.alert("","Something went wrong, try again!"+response)
      }
    }.bind(this));
  }
  sendIdea = (e) => {
    e.preventDefault();
    this.addIdea(this.state);
    this.setState({ idea1: '' });
  }

  render() {
    return (

      <View
        style={styles.commentDiv}>
        <View style={styles.ideaInputandButton}>

          <TextInput
            style={styles.ideaInputText}
            onChangeText={idea => this.setState({ idea })}
            value={this.state.idea1}
            multiline={true}
            maxLength={100}
            placeholder="Your idea:"
            placeholderTextColor="#C0C0C0"

          />
          <View>
            <TouchableOpacity onPress={this.sendIdea}>
              <Image
                
                style={styles.arrow}
                source={require("../Assets/images/ideo_arrow.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
