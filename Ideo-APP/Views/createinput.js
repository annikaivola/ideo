import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Createpage from '../Screens/createpage';


export default class Createinput extends Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Ideaspace name', password: 'Password', email:'Email' };
}
//email ei pakollinen, voidaan lähettää ideaspacen nimi ja salasana koska ei ole tapaa recoveraa niitä myöhemmin
//clearFields =()=> this.setState({name:'', password:'', email:''});

render() {
    return (
      <View>
        <TextInput style={styles.inputBox} 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <TextInput style={styles.inputBox} 
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>
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