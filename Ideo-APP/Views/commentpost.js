
import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from './ideainput';

export default class IdeaPost extends Component {
  static navigationOptions={
    header:null
  }

  plusorminus=()=>{
    if(this.props.procon==1){
     return true;
    }
    else if(this.props.procon==-1){
      return false;
    }  
  }

  render() {
    return (
      <View>
      <View style={styles.iconAndCommentDiv}>
       <Image
            style={{ height: 35, width: 35 }}
            source={this.plusorminus() ? require("..//Assets/images/plus.png") : require("..//Assets/images/minus.png")}/>
          <Text style={styles.CommentText}>{this.props.comment}</Text>
      </View>
      </View>
    );
  }
}