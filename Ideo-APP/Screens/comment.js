import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  RefreshControl,
} from "react-native";
import Commentpost from "../Views/commentpost";
import {DrawerButton} from 'react-navigation';
import { styles } from "../Styles/styles";
import { addNewComment } from "../Views/ServiceDesk";
import IdeaToComment from "../Views/ideapost2";
import RateInput from "../Views/rateinput";

var DismissKeyboard = require("dismissKeyboard");

export default class AddComment extends Component {
  static navigationOptions = ({ navigation }) => {
    return {

      headerRight: (<TouchableOpacity onPress={()=>navigation.navigate("Landingpage")}><Text style={{color:"#1ac5c3", marginRight: 15, fontSize: 15}}>Log Out</Text></TouchableOpacity>

      // headerLeft: (<DrawerButton onPress={()=>navigation.goBack()} procon={this.procon}/>),
   
      ),
    };
  };
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const idea = navigation.getParam("idea", "...");
    const procon = navigation.getParam("procon", "...");

    this.state = {
      ideaId: idea.ideaId,
      data: [],
      _idea: idea.idea1,
      activeProcon: this.props.activeProcon,
      isLoading: false,
      procon: procon,
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

  componentDidUpdate(){
    this.fetchData();
  }

  componentWillUnmount(){
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

  _renderItem = ({ item }) => (
    <Commentpost
      id={item.ideaId}
      commentId={item.commentId}
      comment={item.comment1}
      procon={item.procon}
    />
  );

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }

  plusorminus = () => {
    if (this.state.procon === 1) {
      return true;
    }
    else if (this.state.procon === -1) {
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
        <ScrollView style={{ backgroundColor: '#1ac5c3' }}>
          <View style={styles.commentPage}>
            <View style={styles.ideaAndComments}>
              <IdeaToComment idea={this.state._idea} />
              <View style={styles.ratebtndiv}>
                <TouchableOpacity onPress={() => this.changeProcon(1)}>
                  <Image
                    style={{ height: 60, width: 60, marginRight: "4%", marginBottom: '15%' }}
                    source={require("../Assets/images/plus.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeProcon(-1)}>
                  <Image
                    style={{ height: 60, width: 60, marginBottom: '15%' }}
                    source={require("../Assets/images/minus.png")}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                contentContainerStyle={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginLeft: '7%',
                  marginRight: '7%',
                  width: '80%'
                }}
                input
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={<RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />}
              />
            </View>
            {/* <RateInput procon={this.state.procon}/> */}

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
