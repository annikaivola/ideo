import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Landingpage from './Screens/landingpage';
import Createpage from './Screens/createpage';
import Loginpage from './Screens/loginpage';
import Ideafeed from './Screens/ideafeed';
import {Tabs} from './config/router';


// const RootStack = createStackNavigator(
//   {
//     // Tabs: Tabs,
//     Landingpage: Landingpage,
//     Create: Createpage,
//     Loginpage: Loginpage,
//     Ideafeed: Ideafeed,
//   },
//   {
//     initialRouteName: 'Landingpage',
//     headerMode:"screen",
//     mode:"card"
//   }
// )
export default class App extends Component {
  render() {
    return (
    
      // <Landingpage/>
      <IdeaFeed/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});