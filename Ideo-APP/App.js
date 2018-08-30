
import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Landingpage from './Screens/landingpage';
import Createpage from './Screens/createpage';
import Loginpage from './Screens/loginpage';
import Ideafeed from './Screens/ideafeed';
import AddComment from './Screens/comment';
import Description from './Screens/description';
import {Font} from 'expo';


export const RootStack = StackNavigator(
  {
    Landingpage: Landingpage,
    Create: Createpage,
    Loginpage: Loginpage,
    Description: Description,
    Ideafeed: Ideafeed,
    Comment: AddComment,
  },
  {
    initialRouteName: 'Landingpage',
    //headerMode:"screen",
    //mode:"card"
  },
  console.disableYellowBox = true
)

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'Muli-Regular': require('./Assets/fonts/Muli-Regular.ttf'),
      'Muli-Bold': require('./Assets/fonts/Muli-Bold.ttf')
    });
  }
  
  render() {
    return (
      <RootStack />
      
    );
  }
}

