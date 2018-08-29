import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Form } from "react-native";
import { StackNavigator } from "react-navigation";
import Createpage from "../Screens/createpage";
import { styles } from "../Styles/styles.js";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class Createinput extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", password: "", email: "", description: "" };
  }
  //   isEnabled =
  //   name.length > 0 &&
  //   password.length > 0;

  // <button disabled={!isEnabled}>Sign up</button>
  //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin

  validationError() {
    var x = this.setState;
    if (x == "") {
      alert("this field");
    }
  }
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
        {/* <FormValidationMessage style={styles.required}>This field is required</FormValidationMessage> */}

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
            marginBottom: 5,
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
        {/* <FormValidationMessage>This field is required</FormValidationMessage> */}

        <FormInput
          placeholder="What do you need ideas on? Describe."
          placeholderTextColor="#1ac5c3"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
          multiline={true}
          maxLength={120}
          containerStyle={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#fff",
            marginBottom: 5,
            width: "80%",
            height: "25%"
          }}
          inputStyle={{
            color: "#1ac5c3",
            fontSize: 18,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 5,
            paddingTop: 5,
            width: "80%"
          }}
        />
        {/* <FormValidationMessage style={styles.required}>This field is required</FormValidationMessage> */}
        <FormInput
          placeholder="Email (optional)"
          placeholderTextColor="#1ac5c3"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          maxLength={40}
          containerStyle={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#fff",
            marginBottom: 5,
            width: "80%",
            height: "20%"
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
