import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Loginpage from '../Screens/loginpage.js';

export default class Logininput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ideaspace name', password: 'Password' };
}
//email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana
//clearFields =()=> this.setState({name:'', password:''});

render() {
    return (
      <View>
        <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>
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