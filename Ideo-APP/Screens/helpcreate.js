import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../Styles/styles';

export default class HelpCreate extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Help"
        };
    };
    render() {
        return (
            <ScrollView style={{ backgroundColor: "#1ac5c3" }}>
                <View style={styles.container}>
                    <View>
                        <View style={styles.LPcontainer}><Text style={styles.helpHeading}>Creating an Ideaspace </Text>
                            <Image
                                style={{ height: 75, width: 80 }}
                                source={require("../Assets/images/lightbulb2.png")}
                                resizeMode="contain"
                            />
                            <Image
                                style={{ height: 40, width: 120 }}
                                source={require("../Assets/images/ideo_logo2.png")}
                                resizeMode="contain"
                            /></View>
                        <View style={{ height: 30 }} />
                        <View style={{width:'95%'}}>
                        <Text style={styles.helpPhaseTitle}>Ideaspace name.</Text>
                        <Text style={styles.helpPhaseText}>Give a name to your Ideaspace. This name will be used as a username when logging in.</Text>
                        <Text style={styles.helpPhaseTitle}>Password.</Text>
                        <Text style={styles.helpPhaseText}>Create a shared password for your Ideaspace. Notice that the password cannot be changed at a later time.
                        Anyone with the Ideaspace name and password can join your shared collaboration space.   </Text>
                        <Text style={styles.helpPhaseTitle}>Topic of your brainstorming session.</Text>
                        <Text style={styles.helpPhaseText}>What are you brainstorming about? Write it down here!</Text>
                        <Text style={styles.helpPhaseTitle}>Share Ideaspace via email.</Text>
                        <Text style={styles.helpPhaseText}>This field is optional, however it is recommended. Add the email address of someone you wish to join your brainstorming session.
                        It will open the email app on your phone and you can send the info from your own address and edit the message if needed, how convenient!</Text>
                        <View style={{ height: 20 }} />
                        <View style={styles.LPcontainer}>
                            <Image
                                style={{ height: 47, width: 50 }}
                                source={require("../Assets/images/lightbulb2.png")}
                                resizeMode="contain"
                            />
                            <Text style={styles.helpPhaseText}>Happy brainstorming!</Text>
                        </View>
                        <View style={{ height: 20 }} />
                    </View>
                </View>
                </View>
            </ScrollView>
        );
    }
}