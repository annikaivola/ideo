import IdeaPost from "../Views/ideapost";
import RateBtn from "../Views/ratebtn";
import RateInput from "../Views/rateinput";
import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import Ideafeed from "./ideafeed";
import Commentpost from "../Views/commentpost";
import { styles } from "../Styles/styles";
import IdeaBtn from "../Views/ideabtn";
import { addNewComment } from "../Views/ServiceDesk";

var DismissKeyboard = require("dismissKeyboard");

export default class AddComment extends Component {
  //navigoi submitin jälkeen takaisin ideafeediin
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const idea = navigation.getParam("idea", "...");
    // this.props.activeProcon=navigation.getParam('activeProcon','...');
    // changeProcon()=navigation.getParam('changeProcon','...');
    // this.props.procon=this.props.procon.bind(this);

    this.state = {
      ideaId: idea.ideaId,
      data: [],
      _idea: idea.idea1,
      activeProcon: this.props.activeProcon,
      isLoading: false,
      procon: 1
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

    }.bind(this));
  }

  sendComment = (e) => {
    e.preventDefault();
    this.addComment(this.state);
    this.fetchData();
    this.setState({ comment1: "" });
  };

  _renderItem = ({ item }) => (
    <Commentpost
      id={item.ideaId}
      commentId={item.commentId}
      comment={item.comment1}
      procon={item.procon}
    />
  );
  
  plusorminus=()=>{
    if(this.state.procon===1){
     return true;
    }
    else if(this.state.procon===-1){
      return false;
    }  
  }
  _keyExtractor = (item, index) => item.commentId.toString();

  render() {
    return (

      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
      <ScrollView style={{backgroundColor: '#1ac5c3'}}>
        <View style={styles.commentPage}>
          <View style={styles.ideaAndComments}>
            <IdeaPost idea={this.state._idea} />
            <View style={styles.ratebtndiv}>
              <TouchableOpacity onPress={()=>this.changeProcon(1)}>
                <Image
                  style={{ height: 50, width: 50, marginRight: "4%" }}
                  source={require("../Assets/images/plus.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.changeProcon(-1)}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../Assets/images/minus.png")}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{
                alignItems: "flex-start",
                justifyContent: "center"
              }}
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <KeyboardAvoidingView
            behavior="position"
            enabled
            // keyboardVerticalOffset={120}
          >
            <View style={styles.commentDiv}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  alignSelf: "center",
                  justifyContent: "center"
                }}
                source={this.plusorminus() ? require("..//Assets/images/plus.png") : require("..//Assets/images/minus.png")}
              />

              <TextInput
                style={styles.commentInputText}
                onChangeText={comment1 => this.setState({ comment1 })}
                value={this.state.comment1}
                multiline={true}
                maxLength={100}
                placeholder={this.plusorminus()? "What's good about this idea?" : "What's bad about this idea?"}
                placeholderTextColor="#C0C0C0"
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
              {/* <IdeaBtn /> */}
            </View>
            {/* <RateInput /> */}
          </KeyboardAvoidingView>
        </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

// import IdeaPost from "../Views/ideapost";
// import RateBtn from "../Views/ratebtn";
// import RateInput from "../Views/rateinput";
// import React, { Component } from "react";
// import {
//   View,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Button,
//   StyleSheet,
//   Alert,
//   Text
// } from "react-native";
// import { StackNavigator } from "react-navigation";
// import Ideafeed from "./ideafeed";
// import Commentpost from "../Views/commentpost";
// import { styles } from "../Styles/styles";
// import IdeaBtn from "../Views/ideabtn";

// var DismissKeyboard = require("dismissKeyboard");

// export default class AddComment extends Component {
//   //navigoi submitin jälkeen takaisin ideafeediin
//   render() {
//     return (
//       <TouchableWithoutFeedback
//         onPress={() => {
//           DismissKeyboard();
//         }}
//       >
//         <View style={styles.commentPage}>
//           <View style={styles.ideaAndComments}>
//             <IdeaPost />
//             <Commentpost />
//           </View>
//           <KeyboardAvoidingView
//             behavior="padding"
//             enabled
//             keyboardVerticalOffset={170}
//           >
//             <RateInput />
//           </KeyboardAvoidingView>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
