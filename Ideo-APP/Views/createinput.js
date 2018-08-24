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
    if (x == '') {
      alert('this field');
    }
  }
  render() {
    return (
      <View style={styles.formi}>
        <FormInput style={styles.inputStyle}
          placeholder="Ideaspace name"
          placeholderTextColor="#1ac5c3"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          containerStyle={{backgroundColor: '#fff', border: 2, borderRadius: 10, borderColor:'#fff', width: '80%', height: 40}}
          inputStyle={{color: '#fff', fontSize: 18, paddingLeft: 20, paddingRight: 20}}
        />
        <FormValidationMessage style={styles.required} >*required</FormValidationMessage>

        <FormInput style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#1ac5c3"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          containerStyle={{backgroundColor: '#fff', border: 2, borderRadius: 10, borderColor:'#fff', width: '80%' }}
          inputStyle={{color: '#fff', fontSize: 18, paddingLeft: 20, paddingRight: 20}}
        />
        <FormValidationMessage>This field is required</FormValidationMessage>

        <FormInput style={styles.inputStyle}
          placeholder="What do you need ideas on? Describe."
          placeholderTextColor="#1ac5c3"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
          multiline={true}
          containerStyle={{backgroundColor: '#fff', border: 2, borderRadius: 10, borderColor:'#fff', width: '80%' }}
          inputStyle={{color: '#fff', fontSize: 18, paddingLeft: 20, paddingRight: 20}}
        />
        <FormValidationMessage style={styles.required}>This field is required</FormValidationMessage>
        <FormInput style={styles.inputStyle}
          placeholder="Email (optional)"
          placeholderTextColor="#1ac5c3"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          containerStyle={{backgroundColor: '#fff', border: 2, borderRadius: 10, borderColor:'#fff', width: '80%' }}
          inputStyle={{color: '#fff', fontSize: 18, paddingLeft: 20, paddingRight: 20}}
        />
      </View>
    )
  }

}


