import React, { Component } from "react";
import Logininput from "../Views/logininput.js";
import Loginbtn from "../Views/loginbtn.js";
import { View, KeyboardAvoidingView, Text, TouchableWithoutFeedback, StyleSheet, TextInput, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { styles } from "../Styles/styles";
import { getIdeaspace } from "../Views/ServiceDesk.js";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

var DismissKeyboard = require('dismissKeyboard');

export default class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", password: "", activateIdeaspace:null };

    this.activateIdeaspace = this.activateIdeaspace.bind(this);
    
      }
      activateIdeaspace = (ideaspace) => this.setState ({activeIdeaspace: ideaspace});

  nameChanged = (e)=> {
    this.setState({name: e.target.value})
  }
  passwordChanged = (e)=> {
    this.setState({password: e.target.value})
  }

  foundInDatabase = () => {
    getIdeaspace(this.state.name, this.state.password, function(ideaspace) {
      this.props.activateIdeaspace(ideaspace)
    }.bind(this)
    )}
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.heading2}> Log in to an Ideaspace. </Text>
        <View style={styles.formi}>
        <FormInput
          placeholder="Ideaspace name"
          placeholderTextColor="#1ac5c3"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          maxLength={20}
          containerStyle={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#fff",
            marginBottom: 5,
            width: "80%",
            height: 40
          }}
          inputStyle={{
            color: "#1ac5c3",
            fontSize: 18,
            paddingLeft: 15,
            paddingRight: 15,
            width: "80%"
          }}
        />

        <FormInput
          placeholder="Password"
          placeholderTextColor="#1ac5c3"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          maxLength={20}
          secureTextEntry={true} 
          containerStyle={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#fff",
            width: "80%"
          }}
          inputStyle={{
            color: "#1ac5c3",
            fontSize: 18,
            paddingLeft: 15,
            paddingRight: 15,
            width: "80%"
          }}
        />
      </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Ideafeed")}
            title="Log in"
            color="#1ac5c3"
          />
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

