import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Createpage from '../Screens/createpage';
import {styles} from '../Styles/styles.js'


export default class Createinput extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', password: '', email:'' };
}
//email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin
//clearFields =()=> this.setState({name:'', password:'', email:''});

render() {
    return (
      <View style={styles.logInputdiv}>
        <TextInput style={styles.loginInput} 
        placeholder="Ideaspace name"
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
        </View>
    )
}
}
