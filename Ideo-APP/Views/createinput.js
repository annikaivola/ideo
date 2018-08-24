
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Form, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Createpage from '../Screens/createpage';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { addNewIdeaspace } from './ServiceDesk';


import {styles} from '../Styles/styles.js'

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

  render() {
    return (

function validationError() {
  var x = this.setState;
  if (x == '') {
    alert('this field');
  }

      <View style={styles.containerStyle}>
        <FormInput style={styles.inputStyle}
          placeholder="Ideaspace name"
          placeholderTextColor="#fff"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <FormValidationMessage style={styles.required} >This field is required</FormValidationMessage>

        <FormInput style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <FormValidationMessage style={styles.required}>This field is required</FormValidationMessage>

        <FormInput style={styles.inputStyle}
          placeholder="What do you need ideas on? Describe."
          placeholderTextColor="#fff"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
          multiline={true}
        />
        <FormValidationMessage style={styles.required}>This field is required</FormValidationMessage>
        <FormInput style={styles.inputStyle}
          placeholder="Email (optional)"
          placeholderTextColor="#fff"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '45%',
  },
});

