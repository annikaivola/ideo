import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView } from 'react-native';
import IdeaPostList from '../Views/ideapostlist.js';
import IdeaBtn from '../Views/ideabtn.js';
import IdeaInput from '../Views/ideainput';
import { styles } from '../Styles/styles.js'


export default class IdeaFeed extends Component {
    render() {
        return (
          <View>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Text>IDEO</Text>
            <IdeaPostList/>
            <View style={styles.inputDiv}>
            <IdeaInput/>
            <IdeaBtn/>
            </View>
            </KeyboardAvoidingView>
        );
    }
}