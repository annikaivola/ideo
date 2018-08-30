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
  Alert,
  TextInput,
  Image
} from "react-native";
import IdeaPostList from "../Views/ideapostlist.js";
import IdeaBtn from "../Views/ideabtn.js";
import IdeaInput from "../Views/ideainput";
import { styles } from "../Styles/styles.js";
import Comment from "./comment";
import { activeIdeaspace } from "../Screens/loginpage";
//import IdeaPost from "../Views/ideapost.js";
//import { runInThisContext } from "vm";
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
            {/* <IdeaInput
              activeIdeaspace={this.state.id}
              // updateIdeas={this.updateIdeas}
              data={this.state.data} /> */}

          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   ScrollView,
//   TouchableOpacity,
//   FlatList,

//   keyExtractor,
//   Alert
// } from "react-native";
// import IdeaPostList from "../Views/ideapostlist.js";
// import IdeaBtn from "../Views/ideabtn.js";
// import IdeaInput from "../Views/ideainput";
// import { styles } from "../Styles/styles.js";

// import Comment from './comment';
// import { activeIdeaspace } from '../Screens/loginpage';
// //import IdeaPost from "../Views/ideapost.js";
// //import { runInThisContext } from "vm";
// import { getIdeas } from "../Views/ServiceDesk.js";

// import IdeaPost from "../Views/ideapost.js";

// var DismissKeyboard = require("dismissKeyboard");

// export default class IdeaFeed extends Component {

//   constructor(props) {
//     super(props);
//     const { navigation } = this.props;
//     const activeIdeaspace = navigation.getParam('activeIdeaspace', '...')


//     this.state = {
//       id: activeIdeaspace.ideaspaceId,
//       isLoading: false,
//       ideaposts: [
//         {
//           id: 1,

//         },
//         {
//           id: 2,

//         },
//         {
//           id: 3,

//         }
//       ]

//     }
//     this.componentDidMount = this.componentDidMount.bind(this);
//     // this.componentDidUpdate = this.componentDidUpdate.bind(this);
//     this.updateIdeas = this.updateIdeas.bind(this);
//     this.getAllIdeas = this.getAllIdeas.bind(this);
//   }
//   componentDidMount() {
//     this.setState({
//       isLoading: true,


//     });
//     getIdeas(this.state.id).then( function (list) {
//       this.updateIdeas(list);
//     }.bind(this));
//   }
//   // componentDidUpdate (prevProps) {
//   // if ()
//   // }
//   getAllIdeas() {
//     this.setState({
//       isLoading: true,

//     })
//     getIdeas(function (list) {
//       this.updateIdeas(list);
//     }.bind(this));
//   }
//   updateIdeas(ideas) {
//     this.setState({
//       ideaposts: ideas,
//       isLoading: false
//     });
//   }

//   _renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => this.props.navigation.navigate("Comment")}>
//       <IdeaPost 
//       id={item.id}
//       />

//     </TouchableOpacity>
//   );

//   _keyExtractor = (item, index) => (item.id.toString());

//   render() {
//     //     let ideas= this.state.ideaposts.map(function(ideadata) {
//     // return (<IdeaPost ideaposts = {ideadata} key = {ideadata.IdeaId}/>);
//     //     });

//     Alert.alert(' ', this.state.id)
//     return (
//       <TouchableWithoutFeedback
//         onPress={() => {
//           DismissKeyboard();
//         }}
//       >
//         <View
//           style={styles.feedi}
//           containerStyle={{ alignItems: "center", justifyContent: "center" }}
//         >

//           <ScrollView>
//             <FlatList data={this.state.ideaposts} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
//           </ScrollView>

//           <KeyboardAvoidingView
//             behavior="padding"
//             enabled
//             keyboardVerticalOffset={65}
//           >

//             <IdeaInput
//               activeIdeaspace={this.state.activeIdeaspace}
//               updateIdeas={this.updateIdeas}
//               ideaposts={this.state.ideaposts} />


//           </KeyboardAvoidingView>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
