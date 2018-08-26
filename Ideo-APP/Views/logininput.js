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
    );
  }
}
