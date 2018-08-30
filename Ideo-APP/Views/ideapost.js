import React, { Component } from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet, Image } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from "./ideainput";
import {withNavigation} from 'react-navigation';

class IdeaPost extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      procon: 1
    }
  }
  changeProcon = (vote)=>{
    this.state.procon = vote;
    console.log(this.state.procon)
    this.props.navigation.navigate("Comment", {idea:this.props.item, procon: this.state.procon})
  }
  render() {
    return (
      <View style={styles.ideapost}>
        <Text style={styles.IdeaPostText}>
          {this.props.idea}
        </Text>
        <View style={styles.ratebtndiv}>
          <TouchableOpacity onPress={()=>this.changeProcon(1)}>
          <Image
            style={{ height: 50, width: 50, marginRight: '4%', marginTop: '4%'}}
            source={require("../Assets/images/plus.png")}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.changeProcon(-1)}>
          <Image
            style={{ height: 50, width: 50, marginTop: '4%' }}
            source={require("../Assets/images/minus.png")}
          />
          </TouchableOpacity>
        </View>
        {/* <RateBtn /> */}
      </View>
    );
  }
}
export default withNavigation(IdeaPost);
