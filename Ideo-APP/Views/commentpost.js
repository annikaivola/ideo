
import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image, Button, StyleSheet } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from './ideainput';

export default class IdeaPost extends Component {
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View>
      <View style={styles.iconAndCommentDiv}>
       <Image
            style={{ height: 30, width: 30 }}
            source={require("../Assets/images/plus.png")}/>
          <Text style={styles.CommentText}>Effective & Budget-friendly</Text>
      </View>
      <View style={styles.iconAndCommentDiv}>
       <Image
            style={{ height: 30, width: 30 }}
            source={require("../Assets/images/minus.png")}/>
          <Text style={styles.CommentText}>Sounds good, doesn't work</Text>
      </View>
      </View>
    );
  }
}