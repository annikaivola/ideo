import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image
} from "react-native";
import { styles } from "../Styles/styles.js";
import { addNewIdea } from "../Views/ServiceDesk.js";
import IdeaPost from "../Views/ideapost.js";
import { Button } from "react-native-elements";


var DismissKeyboard = require("dismissKeyboard");

export default class IdeaFeed extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Ideafeed",
      headerRight: (<TouchableOpacity onPress={()=>navigation.navigate("Landingpage")}><Text style={{color:"#1ac5c3"}}>Log Out</Text></TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const activeIdeaspace = navigation.getParam("activeIdeaspace", "...");
    this.state = {
      ideaspaceId: activeIdeaspace.ideaspaceId,
      isLoading: false,
      data: [],
    }
  }

  fetchData = async () => {
    const response = await fetch("https://ideo-api.azurewebsites.net/api/ideas/getideasbyideaspaceid?ideaspaceid=" + this.state.ideaspaceId);
    const ideas = await response.json(); //ideas have array data
    this.setState({ data: ideas }); //filled data with dynamic array
  }

  componentDidMount() {
    this.fetchData();
  }

  addIdea = (state) => {
    addNewIdea(state, function (response) {
      if (response >= 200 && response < 300) {
        this.fetchData();
      }
    }.bind(this));
  }
  sendIdea = (e) => {
    e.preventDefault();
    this.addIdea(this.state);
    this.fetchData();
    this.setState({ idea1: '' });
  }
  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Comment", { idea: item })}>
      <IdeaPost
        item={item}
        id={item.ideaspaceId}
        ideaId={item.ideaId}
        idea={item.idea1}
      />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => (item.ideaId.toString());

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View
          style={styles.feedi}
          containerStyle={{ alignItems: "center", justifyContent: "center" }}
        >
          <FlatList data={this.state.data} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            keyboardVerticalOffset={65}
          >
            <View
              style={styles.commentDiv}>
              <View style={styles.ideaInputandButton}>

                <TextInput
                  style={styles.ideaInputText}
                  onChangeText={idea1 => this.setState({ idea1 })}
                  value={this.state.idea1}
                  multiline={true}
                  maxLength={100}
                  placeholder="Your idea:"
                  placeholderTextColor="#C0C0C0"

                />
                {""}

                <View>
                  <TouchableOpacity onPress={this.sendIdea}>
                    <Image

                      style={styles.arrow}
                      source={require("../Assets/images/ideo_arrow.png")}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}