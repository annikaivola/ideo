import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../Styles/styles';

export default class HelpLogin extends Component {
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
                        <View style={styles.LPcontainer}><Text style={styles.helpHeading}>Loggin in to an Ideaspace </Text>
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
                        <Text style={styles.helpPhaseTitle}>Ideaspce name.</Text>
                        <Text style={styles.helpText}>The name of your shared Ideaspace.</Text>
                        <Text style={styles.helpPhaseTitle}>Password.</Text>
                        <Text style={styles.helpText}>Your shared Ideaspace password.   </Text>
                        <Text style={styles.helpPhaseTitle}>Help, I forgot my password!</Text>
                        <Text style={styles.helpPhaseText}>...Oops! Be sure to check your email in case you were sent the Ideaspace information via email or if you were the one sharing the Ideaspace. Unfortunately, the password cannot be changed at a later time.</Text>
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
            </ScrollView>
        );
    }
}