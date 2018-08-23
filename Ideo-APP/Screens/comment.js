import IdeaPost from '../Views/ideapost';
import RateBtn from '../Views/ratebtn';
import RateInput from '../Views/rateinput';
import React, { Component } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import Ideafeed from './ideafeed';
import IdeaPost from '../Views/ideapost';


export default class AddComment extends Component {
    //navigoi submitin jälkeen takaisin ideafeediin
    render() {
        return (
            <View>
                <IdeaPost />
                <RateInput />
                <RateBtn />
            </View>
        );
    }
}