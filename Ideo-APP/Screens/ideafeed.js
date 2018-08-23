import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IdeaPostList from '../Views/ideapostlist.js';
import IdeaBtn from '../Views/ideabtn.js';
import IdeaInput from '../Views/ideainput.js';


export default class IdeaFeed extends Component {
    render() {
        return (
            <View>
            <Text>IDEO</Text>
            <IdeaPostList/>
            <IdeaInput/>
            <IdeaBtn/>
            </View>
        );
    }
}