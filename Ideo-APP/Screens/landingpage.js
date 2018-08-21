import React from 'react';
import { Component } from 'react';
import { Image } from 'react-native';

export default class Landingpage extends Component {

    render() {
        return (
            <Image style={{height: 20, width: 20}}
            source={{uri: 'light-on'}}/>
        )
    }
}
