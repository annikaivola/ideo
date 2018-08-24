import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Loginpage from '../Screens/loginpage.js';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { getIdeaspace, addNewIdeaspace } from './ServiceDesk.js';

export default class Logininput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
  }
  //email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana
  //clearFields =()=> this.setState({name:'', password:''});

  render() {
    return (
      <View>
        <FormLabel>Ideaspace name</FormLabel>
        <FormInput onChangeText={(name) => this.setState({ name })}
          value={this.state.name} />

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />

        <Button
          type="submit"
          onPress={() =>
            //getIdeaspace()
            this.props.navigation.navigate('Ideafeed')

          }
          title="Log in"
          color="#1ac5c3"

        />

        {/* <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/> */}
      </View>
    )
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
