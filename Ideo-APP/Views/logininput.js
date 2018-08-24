import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { StackNavigator } from "react-navigation";
import Loginpage from "../Screens/loginpage.js";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { styles } from "../Styles/styles.js";

export default class Logininput extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", password: "" };
  }
  //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana
  //clearFields =()=> this.setState({name:'', password:''});

  render() {
    return (
      <View style={styles.containerStyle}>
          <FormInput
            style={styles.inputStyle}
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />

          <FormInput
            style={styles.inputStyle}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
    );
  }
}
