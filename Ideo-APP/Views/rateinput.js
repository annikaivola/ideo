import React, { Component } from "react";
import { View, KeyboardAvoidingView, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Styles/styles.js";
import { addNewComment } from "../Views/ServiceDesk";

export default class RateInput extends Component {
  constructor(props) {
    super(props);
      this.state = {
      
      procon: this.props.procon,
      refreshing: false,
    };
  }
  fetchData = async () => {
    const response = await fetch(
      "https://ideo-api.azurewebsites.net/api/Comments/GetCommentByIdeaId?id=" +
      this.state.ideaId
    );
    const comments = await response.json();
    this.setState({ data: comments });
  };

  componentDidMount() {
    this.fetchData();
  }

  changeProcon = (vote) => {
    this.state.procon = vote;
    console.log(this.state.procon)
  }

  addComment = (state) => {
    addNewComment(state, function (response) {
      if (response >= 200 && response < 300) {
        this.fetchData();
      }
    }.bind(this));
  }

  sendComment = (e) => {
    e.preventDefault();
    this.addComment(this.state);
    this.fetchData();
    this.setState({ comment1: "" });
  };
  
  plusorminus = () => {
    if (this.state.procon === 1) {
      return true;
    }
    else if (this.state.procon === -1) {
      return false;
    }
  }
  render() {
    return (
        // <View>
        <KeyboardAvoidingView
        behavior="padding"
      >
        <View style={styles.commentDiv}>
          <Image
            style={{
              height: 35,
              width: 35,
              alignSelf: "center",
              justifyContent: "center"
            }}
            source={this.plusorminus() ? require("..//Assets/images/plus.png") : require("..//Assets/images/minus.png")}
            // refreshControl={<RefreshControl
            //   refreshing={this.state.refreshing}
            //   onRefresh={this._onRefresh}/>}
          />

          <TextInput
            style={styles.commentInputText}
            onChangeText={comment1 => this.setState({ comment1 })}
            value={this.state.comment1}
            multiline={true}
            maxLength={100}
            placeholder={this.plusorminus() ? "What's good about this idea?" : "What's bad about this idea?"}
            placeholderTextColor="#C0C0C0"
            // refreshControl={<RefreshControl
            //   refreshing={this.state.refreshing}
            //   onRefresh={this._onRefresh}/>}
          />
          <View>
            <TouchableOpacity onPress={this.sendComment}>
              <Image
                style={styles.arrow}
                source={require("../Assets/images/ideo_arrow.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
         /* <View style={styles.commentDiv}>
        <Image
            style={{ height: 30, width: 30 }}
            source={require("../Assets/images/minus.png")}/>
        <TextInput
        //   style={styles.ideaInputText}
          onChangeText={(comment) => this.setState({ comment })}
          value={this.state.comment}
          multiline ={true}
          maxLength={100}
          placeholder="What are the cons?"
          placeholderTextColor="#C0C0C0"
        />
         <IdeaBtn />
        </View> */
        // </View>
        
    );
  }
}
