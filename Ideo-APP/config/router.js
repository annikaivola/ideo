import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackNavigator, StackActions, NavigationAction} from 'react-navigation'; 
import Createpage from '../Screens/createpage.js';
import Loginpage from '../Screens/loginpage.js';

const Nav = StackNavigator({
    Createpage: { screen :Createpage },
    Loginpage: { screen: Loginpage },
  });

  export default Nav;