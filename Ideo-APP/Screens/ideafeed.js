<<<<<<< HEAD
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IdeaPostList from '../Views/ideapostlist.js';
import IdeaBtn from '../Views/ideabtn.js';
import IdeaInput from '../Views/ideainput';


export default class IdeaFeed extends Component {
    render() {
        return (
            <View>
            <Text>IDEO</Text>
            <IdeaPostList/>
            <IdeaInput/>
            {/* <IdeaBtn/> */}
            </View>
        );
    }
=======
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default class Ideafeed extends Component {
    render() {
        return (
            <View>
                <Text>Ideafeed</Text>
            </View>
        );
    }

>>>>>>> 7f77647d90b7958125a019de8ea719fa90fc2333
}