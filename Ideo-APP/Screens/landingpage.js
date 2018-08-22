import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ChooseLogin from '../Views/chooselogin.js';
import ChooseCreate from '../Views/choosecreate.js';
import IdeaInput from '../Views/ideainput.js';
import { StackNavigator } from 'react-navigation';
import Nav from '../config/router.js';


export default class Landingpage extends Component {
  // static navigationOptions = {
  //     header:null
  // };
  render() {

    return (
      <View style={styles.container}>
        <Image style={{ height: 150, width: 150 }}
          source={require('../Assets/images/light-on.png')} />
        <Text style={styles.logo}>IDEO</Text>
        <ChooseCreate />
        <ChooseLogin />
        <IdeaInput />
        <Nav />
      </View>
      /* <Button 
        onPress={() =>
          Nav.navigation.navigate('Loginpage')}
        title="Log in to Ideaspace"
        color="gray"
      />
      <Button 
        onPress={() =>
          Nav.navigation.navigate('Loginpage')}
        title="Log in to Ideaspace"
        color="gray"
      /> */
    );

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ac5c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Avenir-Medium',
    fontSize: 100,
    color: '#fff'
  }
});