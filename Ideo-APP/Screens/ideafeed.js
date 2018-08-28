import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  FlatList,
  keyExtractor,
  Alert
} from "react-native";
import IdeaPostList from "../Views/ideapostlist.js";
import IdeaBtn from "../Views/ideabtn.js";
import IdeaInput from "../Views/ideainput";
import { styles } from "../Styles/styles.js";
import Comment from './comment';
import { activeIdeaspace } from '../Screens/loginpage';
//import IdeaPost from "../Views/ideapost.js";
//import { runInThisContext } from "vm";
import { getIdeas } from "../Views/ServiceDesk.js";
import IdeaPost from "../Views/ideapost.js";

var DismissKeyboard = require("dismissKeyboard");

export default class IdeaFeed extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const activeIdeaspace = navigation.getParam('activeIdeaspace', '...')

    this.state = {
      id: activeIdeaspace.ideaspaceId,
      isLoading: false,
      ideaposts: [
        {
          id: 1,

        },
        {
          id: 2,

        },
        {
          id: 3,

        }
      ]

    }
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateIdeas = this.updateIdeas.bind(this);
    this.getAllIdeas = this.getAllIdeas.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: true,

    });
    getIdeas(this.state.id).then( function (list) {
      this.updateIdeas(list);
    }.bind(this));
  }
  // componentDidUpdate (prevProps) {
  // if ()
  // }
  getAllIdeas() {
    this.setState({
      isLoading: true,

    })
    getIdeas(function (list) {
      this.updateIdeas(list);
    }.bind(this));
  }
  updateIdeas(ideas) {
    this.setState({
      ideaposts: ideas,
      isLoading: false
    });
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Comment")}>
      <IdeaPost />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.id.toString();


  render() {
    //     let ideas= this.state.ideaposts.map(function(ideadata) {
    // return (<IdeaPost ideaposts = {ideadata} key = {ideadata.IdeaId}/>);
    //     });

    Alert.alert(' ', this.state.id)
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View
          style={styles.feedi}
          behavior="padding"
          enabled
          containerStyle={{ alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView>
            <FlatList data={this.state.ideaposts} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
          </ScrollView>
          <KeyboardAvoidingView
            style={styles.inputDiv}
            behavior="padding"
            enabled
            keyboardVerticalOffset={70}
          >
            <IdeaInput
              activeIdeaspace={this.state.activeIdeaspace}
              updateIdeas={this.updateIdeas}
              ideaposts={this.state.ideaposts} />

          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
