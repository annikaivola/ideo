
import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Landingpage from './Screens/landingpage';
import Createpage from './Screens/createpage';
import Loginpage from './Screens/loginpage';
import Ideafeed from './Screens/ideafeed';
import AddComment from './Screens/comment';



export const RootStack = StackNavigator(
  {
    Landingpage: Landingpage,
    Create: Createpage,
    Loginpage: Loginpage,
    Ideafeed: Ideafeed,
    Comment: AddComment,
  },
  {
    initialRouteName: 'Landingpage',
    //headerMode:"screen",
    //mode:"card"
  }
)
export default class App extends Component {
  render() {
    return (

      <RootStack />

    );
  }
}

