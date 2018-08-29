import React, { Component } from "react";

import {
  View,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Alert
} from "react-native";

import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import ChooseCreate from "../Views/choosecreate";
import { styles } from "../Styles/styles";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { addNewIdeaspace } from "../Views/ServiceDesk";
import Communications from 'react-native-communications';

var DismissKeyboard = require("dismissKeyboard");


export default class Createpage extends Component {
  constructor(props) {
    super(props);
    // this.createIdeaspace=this.createIdeaspace.bind(this);

    this.state = { name: "", password: "", email: "", description: "" };
  }
  //   isEnabled =
  //   name.length > 0 &&
  //   password.length > 0;

  // <button disabled={!isEnabled}>Sign up</button>
  //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin

  nameChanged = (e) => this.setState({ name: e.target.value });
  passwordChanged = (e) => this.setState({ password: e.target.value });
  emailChanged = (e) => this.setState({ email: e.target.value });
  descriptionChanged = (e) => this.setState({ description: e.target.value });

  addIdeaspace = (state) => {
    addNewIdeaspace(state, function (response) {
      if(this.state.name  === '') {
        Alert.alert(" ","Ideaspace name is a required field");
      }
      else if (this.state.password === '')
      {
        Alert.alert(" ","Password is a required field")
      }
      else if (this.state.description === '')
      {
        Alert.alert(" ","Description is a required field")
      } 
      else if (response === 401) {
        Alert.alert(" ","This Ideaspace name is already taken, please try something else")
        // this.props.navigation.navigate('Create')
      }
      else if (this.state.email != '' ) {
        Communications.email([this.state.email],null,null,'Ideo: Your Shared Ideaspace', 'Ideaspace name: '+ this.state.name + ', ' +'Password: '+ this.state.password + ', '+'Description: ' +this.state.description)
      }
      else {
        Alert.alert(" ",'Ideaspace created')
        this.props.navigation.navigate('Loginpage')
      }
    }.bind(this));
  }
  createIdeaspace = e => {
    e.preventDefault();
    this.addIdeaspace(this.state);
  };
  

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View style={styles.container} onPress={Keyboard.dismiss}>
          <Text style={styles.heading1}>Let's brainstorm! </Text>

          <Text style={styles.heading2}> First, create an Ideaspace. </Text>
          
          <KeyboardAvoidingView 
          style={styles.formi} 
          behavior="padding" 
          enabled 
          keyboardVerticalOffset={150}>
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

        <FormInput
          placeholder="Share Ideaspace login info"
          placeholderTextColor="#1ac5c3"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          maxLength={40}
          containerStyle={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#fff",
            marginBottom: 15,
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

          <View style={styles.buttonContainer}>
            <Button
              onPress={this.createIdeaspace}              
              title="Create"
              color="#1ac5c3"
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}
// import React, { Component } from "react";
// import { View, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Alert } from "react-native";
// import Createbtn from "../Views/createbtn";
// import { StackNavigator } from "react-navigation";
// import ChooseCreate from '../Views/choosecreate';
// import { styles } from '../Styles/styles';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import { addNewIdeaspace, getIdeaspace } from "../Views/ServiceDesk";

// var DismissKeyboard = require('dismissKeyboard');


// export default class Createpage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { name: "", password: "", email: "", description: "", activeIdeaspace: null };
//   }
//   //   isEnabled =
//   //   name.length > 0 &&
//   //   password.length > 0;

//   // <button disabled={!isEnabled}>Sign up</button>
//   //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin
//   nameChanged = (e) => this.setState({ name: e.target.value });
//   passwordChanged = (e) => this.setState({ password: e.target.value });
//   emailChanged = (e) => this.setState({ email: e.target.value });
//   descriptionChanged = (e) => this.setState({ description: e.target.value });

//   addIdeaspace = (state) => {
//     addNewIdeaspace(state, function (response) {
//       if (this.state.name === '') {
//         Alert.alert(" ", "Ideaspace name is a required field");
//       }
//       else if (this.state.password === '') {
//         Alert.alert(" ", "Password is a required field")
//       }
//       else if (this.state.description === '') {
//         Alert.alert(" ", "Description is a required field")
//       }
//       else if (response === 401) {
//         Alert.alert(" ", "This Ideaspace name is already taken, please try something else")
//         // this.props.navigation.navigate('Create')
//       }

//       else {
//         Alert.alert(" ", 'Ideaspace created')
//         // getIdeaspace(this.state.name, this.state.password).then(ideaspace => {
//         //   this.setState({ activeIdeaspace: ideaspace });
//         //   this.props.navigation.navigate('Ideafeed', { activeIdeaspace: ideaspace });
//         // });
//       }
//     });
//   }
// getCreated=()=>{
//   getIdeaspace(this.state.name, this.state.password).then(ideaspace => {
//     this.setState({ activeIdeaspace: ideaspace });
//     this.props.navigation.navigate('Ideafeed', { activeIdeaspace: ideaspace });
//   });
// }

//   validationError() {
//     var x = this.state.name;
//     if (x == "") {
//       alert("This is a required field");
//     }
//   }
//   createIdeaspace = (e) => {
//     e.preventDefault();
//     this.addIdeaspace(this.state);
//     this.getCreated();
//   }
//   render() {

//     return (
//       <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
//         <KeyboardAvoidingView style={styles.container} onPress={Keyboard.dismiss} behavior="padding" enabled>
//           <Text style={styles.heading1}>Let's brainstorm! </Text>
//           <Text style={styles.heading2}> First create an Ideaspace. </Text>
//           <View style={styles.formi}>
//             <FormInput
//               placeholder="Ideaspace name"
//               placeholderTextColor="#1ac5c3"
//               onChangeText={name => this.setState({ name })}
//               value={this.state.name}
//               maxLength={20}
//               containerStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: 10,
//                 borderColor: "#fff",
//                 marginBottom: 5,
//                 width: "80%",
//                 height: 40
//               }}
//               inputStyle={{
//                 color: "#1ac5c3",
//                 fontSize: 18,
//                 paddingLeft: 15,
//                 paddingRight: 15,
//                 width: "80%"
//               }}
//             />

//             <FormInput
//               placeholder="Password"
//               placeholderTextColor="#1ac5c3"
//               onChangeText={password => this.setState({ password })}
//               value={this.state.password}
//               maxLength={20}
//               containerStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: 10,
//                 borderColor: "#fff",
//                 marginBottom: 5,
//                 width: "80%"
//               }}
//               inputStyle={{
//                 color: "#1ac5c3",
//                 fontSize: 18,
//                 paddingLeft: 15,
//                 paddingRight: 15,
//                 width: "80%"
//               }}
//             />

//             <FormInput
//               placeholder="What do you need ideas on? Describe."
//               placeholderTextColor="#1ac5c3"
//               onChangeText={description => this.setState({ description })}
//               value={this.state.description}
//               multiline={true}
//               maxLength={120}
//               containerStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: 10,
//                 borderColor: "#fff",
//                 marginBottom: 5,
//                 width: "80%",
//                 height: "25%"
//               }}
//               inputStyle={{
//                 color: "#1ac5c3",
//                 fontSize: 18,
//                 paddingLeft: 15,
//                 paddingRight: 15,
//                 paddingBottom: 5,
//                 paddingTop: 5,
//                 width: "80%"
//               }}
//             />

//             <FormInput
//               placeholder="Email (optional)"
//               placeholderTextColor="#1ac5c3"
//               onChangeText={email => this.setState({ email })}
//               value={this.state.email}
//               maxLength={40}
//               containerStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: 10,
//                 borderColor: "#fff",
//                 marginBottom: 15,
//                 width: "80%"
//               }}
//               inputStyle={{
//                 color: "#1ac5c3",
//                 fontSize: 18,
//                 paddingLeft: 15,
//                 paddingRight: 15,
//                 width: "80%"
//               }}
//             />
//             <View style={styles.buttonContainer}>
//               <Button
//                 onPress={this.createIdeaspace

//                 }
//                 title="Create"
//                 color="#1ac5c3"
//               />
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
