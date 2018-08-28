import React, { Component } from "react";

import { getIdeas, addNewIdea } from "./ServiceDesk.js";

import { Alert, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styles/styles.js";
import IdeaBtn from "../Views/ideabtn.js";


export default class IdeaInput extends Component {
  state = {
    // ideaspaceId: this.props.activeIdeaspace.ideaspaceId,
    idea: " ",
  };
  constructor(props) {
    super(props);
    this.addIdea = this.addIdea.bind(this);
    this.sendIdea = this.sendIdea.bind(this);
  }
  // componentWillReceiveProps(props) {
  //   this.setState({ activeIdeaspace: props.activeIdeaspace })
  // }
  // fetchData = async()=>{
  //   const response = await fetch("https://ideo-api.azurewebsites.net/api/ideas/getideasbyideaspaceid?ideaspaceid=25");
  //   const ideas = await response.json(); //ideas have array data
  //   this.setState({data:ideas}); //filled data with dynamic array
  // }

  // componentDidMount(){
  //   this.fetchData();
  // }
  // componentDidMount() {
  //   this.props.updateIdeas(this.props.ideaposts);
  // }
  // getIdeasAndUpdate = () => {
  //   getIdeas(this.props.activeIdeaspace.IdeaspaceId, function (list) {
  //     this.props.updateIdeas(list)
  //   }.bind(this));
  // }
  ideaChanged = (e) => this.setState({idea: e.target.value});

  addIdea = (idea) => {
    addNewIdea(idea, function (response) {
      if(!response.ok){
        Alert.alert("","Something went wrong, try again!"+response)
      }
      // this.getIdeasAndUpdate();
    }.bind(this));
  }
  sendIdea = (e) => {
    e.preventDefault();
    this.addIdea(this.state);
    this.setState({ idea: '' });
  }

  render() {
    return (

      <View
        style={styles.commentDiv}>
        <View style={styles.ideaInputandButton}>

          <TextInput
            style={styles.ideaInputText}
            onChangeText={(idea) => this.setState({ idea })}
            value={this.state.idea}
            multiline={true}
            maxLength={100}
            placeholder="Your idea:"
            placeholderTextColor="#C0C0C0"

          />{""}
          <View>
            <TouchableOpacity>
              <Image
                onPress={this.sendIdea}
                style={styles.arrow}
                source={require("../Assets/images/ideo_arrow.png")}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


// import React, { Component } from "react";

// import { getIdeas, addNewIdea } from "./ServiceDesk.js";

// import { View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
// import { styles } from "../Styles/styles.js";
// import IdeaBtn from "../Views/ideabtn.js";


// export default class IdeaInput extends Component {
//   state = {
//     idea: " ",
//     activeIdeaspace: '',
//   };
//   constructor(props) {
//     super(props);
//     this.addIdea = this.addIdea.bind(this);
//     this.sendIdea = this.sendIdea.bind(this);
//   }
//   componentWillReceiveProps(props) {
//     this.setState({ activeIdeaspace: props.activeIdeaspace })
//   }
//   // ideaCreated = (e) => {
//   //   this.setState({idea: e.target.value});
//   // }
//   componentDidMount() {
//     this.props.updateIdeas(this.props.ideaposts);
//   }
//   getIdeasAndUpdate = () => {
//     getIdeas(this.props.activeIdeaspace.IdeaspaceId, function (list) {
//       this.props.updateIdeas(list)
//     }.bind(this));
//   }
//   addIdea = (idea) => {
//     idea.IdeaspaceId = this.state.activeIdeaspace.IdeaspaceId;
//     addNewIdea(idea, function () {
//       this.getIdeasAndUpdate();
//     }.bind(this));
//   }
//   sendIdea = (e) => {
//     e.preventDefault();
//     this.addIdea(this.state);
//     this.setState({ idea: '' });
//   }

//   render() {
//     return (

//       <View
//         style={styles.commentDiv}>
//         <View style={styles.ideaInputandButton}>

//           <TextInput
//             style={styles.ideaInputText}
//             onChangeText={(idea) => this.setState({ idea })}
//             value={this.state.idea}
//             multiline={true}
//             maxLength={100}
//             placeholder="Your idea:"
//             placeholderTextColor="#C0C0C0"

//           />{""}
//           <View>
//             <TouchableOpacity>
//               <Image
//                 onPress={this.sendIdea}
//                 style={styles.arrow}
//                 source={require("../Assets/images/ideo_arrow.png")}
//                 resizeMode='contain'
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
