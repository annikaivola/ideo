import React, { Component } from "react";
import Createinput from "../Views/createinput";
import { View, Button, StyleSheet, Alert, TextInput, Form } from "react-native";
import Createbtn from "../Views/createbtn";
import { StackNavigator } from "react-navigation";
import ChooseCreate from '../Views/choosecreate';
import styles from '../Styles/styles';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Createpage extends Component {


  render() {
    return (
      <View>
        <Createinput/>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Ideafeed')
             
          }
          title="Create Ideaspace"
          color="#1ac5c3"

        />
      </View>
    );
  }
}



