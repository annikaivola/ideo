import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ChooseLogin from '../Views/chooselogin.js';
import ChooseCreate from '../Views/choosecreate.js';
import IdeaInput from '../Views/ideainput.js';
import { StackNavigator } from 'react-navigation';
import {styles} from '../Styles/styles.js';


export default class Landingpage extends Component {

  render() {

    return (
      <View style={styles.LPcontainer}>
        <Image style={{ height: 150, width: 150 }}
          source={require('../Assets/images/light-on.png')} />
        <Text style={styles.logo}>IDEO</Text>
        <ChooseCreate />
        <ChooseLogin />
        {/* <IdeaInput /> */}
        {/* <Nav /> */}
      </View>

    );

  }

}


