import React, { Component } from "react";
import { View, Button, TextInput, TouchableOpacity, Image} from "react-native";
import { styles } from "../Styles/styles.js";
import { getIdeas, addNewIdea } from "./ServiceDesk.js";

export default class IdeaInput extends Component {
    state = { 
      idea: " ",
      activeIdeaspace: '',
    };
    constructor(props) {
      super(props);
      this.addIdea = this.addIdea.bind(this);
      this.sendIdea = this.sendIdea.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({activeIdeaspace: props.activeIdeaspace})
  }
  // ideaCreated = (e) => {
  //   this.setState({idea: e.target.value});
  // }
componentDidMount(){
  this.props.updateIdeas(this.props.ideaposts);
}
getIdeasAndUpdate = () => {
  getIdeas(this.props.activeIdeaspace.IdeaspaceId, function(list) {
    this.props.updateIdeas(list)
  }.bind(this));
}
addIdea = (idea)=>{
  idea.IdeaspaceId=this.state.activeIdeaspace.IdeaspaceId;
  addNewIdea(idea, function(){
    this.getIdeasAndUpdate();
  }.bind(this));
}
sendIdea = (e) => {
  e.preventDefault();
  this.addIdea(this.state);
  this.setState({idea: ''});
}

  render() {
    return (
      <View>
        <TextInput
          style={styles.ideaInputText}
          onChangeText={(idea) => this.setState({ idea })}
          value={this.state.idea}
          multiline ={true}
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
    );
  }
}
