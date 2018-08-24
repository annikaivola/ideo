import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Form, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Createpage from '../Screens/createpage';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { addNewIdeaspace } from './ServiceDesk';


import {styles} from '../Styles/styles.js'



export default class Createinput extends Component {

  constructor(props) {
    super(props);

    this.state = { name: '', password: '', email: '', description: '' };
  }
  //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin


  render() {
    return (
      <View>
        
      
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={(name) => this.setState({ name })}
          value={this.state.name} />


        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
        <FormValidationMessage>This field is required</FormValidationMessage>

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />

        <FormLabel>Description</FormLabel>
        <FormInput onChangeText={(description) => this.setState({ description })}
          value={this.state.description} />
        <FormValidationMessage>This field is required</FormValidationMessage>

<Button
        type="submit"
          onPress={() =>
            this.props.navigation.navigate('Ideafeed')
             
          }
          title="Create Ideaspace"
          color="#1ac5c3"

        />
        {/* <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.loginInput} 
        placeholder="Password"
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <TextInput style={styles.loginInput} 
        placeholder="Email (optional)"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/> 

        <TextInput style={styles.inputBox} 
        onChangeText={(description) => this.setState({description})}
        value={this.state.description}
        multiline= {true}/>  */}

      </View>

    )
  }
}
function validationError() {
  var x = this.setState;
  if (x == '') {
    alert('this field');
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

