
import { RateBtn } from "../Views/ratebtn.js";
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {styles} from '../Styles/styles.js'
import Ideainput from './ideainput';


export default class IdeaPost extends Component {
  render() {
    return (
      <View>
        <Text style={styles.ideapost}>"Esimerkki idea blaablaa"</Text>
        <RateBtn/>
      </View>
    );
  }
}
