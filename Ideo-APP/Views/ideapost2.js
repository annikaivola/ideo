import React, { Component } from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet,Image } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from "./ideainput";

export default class IdeaToComment extends Component {
  static navigationOptions = {
    header: null
  };
  onPressPlus=()=>{

  }
  render() {
    return (
      <View style={styles.ideapost2}>
        <Text style={styles.IdeaPostText}>
          {this.props.idea}
        </Text>
        {/* <View style={styles.ratebtndiv}> */}
        {/* <TouchableOpacity onPress={()=>this.props.changeProcon(1)}> */}
          {/* <Image
            style={{ height: 50, width: 50, marginRight: '4%'}}
            source={require("../Assets/images/plus.png")}
          /> */}
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>this.props.changeProcon(-1)}> */}
          {/* <Image
            style={{ height: 50, width: 50 }}
            source={require("../Assets/images/minus.png")}
          /> */}
        {/* </TouchableOpacity> */}
      {/* </View> */}
        {/* <RateBtn /> */}
      </View>
    );
  }
}
