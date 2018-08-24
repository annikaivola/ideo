import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Form} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Createpage from '../Screens/createpage';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'



export default class Createinput extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', password: '', email:'', description: '' };
}
//email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin


render() {
    return (
<View>
<FormLabel>Name</FormLabel>
<FormInput onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>
<FormValidationMessage>This field is required</FormValidationMessage>

<FormLabel>Password</FormLabel>
<FormInput onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>
<FormValidationMessage>This field is required</FormValidationMessage>

<FormLabel>Email</FormLabel>
<FormInput onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>

        <FormLabel>Description</FormLabel>
<FormInput onChangeText={(description) => this.setState({description})}
        value={this.state.description}/>
<FormValidationMessage>This field is required</FormValidationMessage>

       
         {/* <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <TextInput style={styles.inputBox} 
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '45%',
  },
});