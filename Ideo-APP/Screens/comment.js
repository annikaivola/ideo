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
  FlatList
} from "react-native";
import { StackNavigator } from "react-navigation";
import Ideafeed from "./ideafeed";
import Commentpost from "../Views/commentpost";
import { styles } from "../Styles/styles";
import IdeaBtn from "../Views/ideabtn";

var DismissKeyboard = require("dismissKeyboard");

export default class AddComment extends Component {
  //navigoi submitin jälkeen takaisin ideafeediin
  constructor(props){
    super(props);
    const { navigation } = this.props;
    const idea = navigation.getParam('idea', '...');

    this.state={
      // showIdea:[],
      id: idea.ideaId,
      data:[],
      _idea: idea.idea1
    }

  }

  fetchData = async()=>{
    const response = await fetch("https://ideo-api.azurewebsites.net/api/Comments/GetCommentByIdeaId?id=" + this.state.id);
    const comments = await response.json();
    this.setState({data:comments}); 
  }

  componentDidMount(){
    this.fetchData();
  }
  _renderItem = ({ item }) => (
     <Commentpost 
      id={item.ideaId}
      commentId={item.commentId}
      comment={item.comment1}
      procon={item.procon}
      />
  );
  
  _keyExtractor = (item, index) => (item.commentId.toString());

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View style={styles.commentPage}>
          <View style={styles.ideaAndComments}>
            <IdeaPost idea={this.state._idea}/>
            <FlatList data={this.state.data} keyExtractor={this._keyExtractor} renderItem={this._renderItem}/>
          </View>
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            keyboardVerticalOffset={170}
          >
            <RateInput />
          </KeyboardAvoidingView>
        </View>
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

