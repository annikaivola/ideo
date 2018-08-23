import React, {Component} from 'react';
import {View, Button, TextInput} from 'react-native';
import {styles} from '../Styles/styles.js'

export default class IdeaInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Your idea:' };
    }
    //clearFields =()=> this.setState({idea:''});

    render() {
        return (
            <TextInput style={styles.inputBox} 
            onChangeText={(idea) => this.setState({idea})}
            value={this.state.idea}
            multiline = {true}
            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '45%',
    },
  });