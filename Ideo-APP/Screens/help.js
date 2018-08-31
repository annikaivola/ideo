import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../Styles/styles';

export default class Help extends Component {
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
                        <View style={styles.LPcontainer}><Text style={styles.helpHeading}>Welcome to </Text>
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
                        <Text style={styles.helpSubheading}>Ideo is a simple tool to help you brainstorm ideas in a group!</Text>
                        <Text style={styles.helpSubheading}>Ideo is built to support the phases of brainstorming.</Text>
                        <View style={{ height: 20 }} />
                        <Text style={styles.helpPhaseTitle}>Phase #1: Clearly define the problem.</Text>
                        <Text style={styles.helpPhaseText}>When creating your Ideo Ideaspace, write down the main problem you are trying to solve.</Text>
                        <Text style={styles.helpPhaseTitle}>Phase #2: Ideas, ideas, ideas!</Text>
                        <Text style={styles.helpPhaseText}>Collect as many ideas as you can!
                            Ideo Ideaspace is a shared collaboration space for your group and the ideas will remain anonymous.
                            So get creative, get inspired and start throwing ideas onto your Ideafeed - let your imagination run wild!
            </Text>
                        <Text style={styles.helpPhaseTitle}>Phase #3: Time for analysis.</Text>
                        <Text style={styles.helpPhaseText}>After collecting as many ideas as possible, it's time to evaluate the ideas and choose the best ones.
                            In Ideo, you can comment and vote on each idea on the Ideafeed. Each comment is intended to be an argument for or against the idea in question.
                            This way you can collect many points of view on each idea conveniently. The ideas with the highest total of votes supporting the idea will rise to the top of your Ideafeed - how convenient!
            </Text>
                        <View style={{ height: 20 }} />
                        <View style={styles.LPcontainer}>
                            <Image
                                style={{ height: 47, width: 50 }}
                                source={require("../Assets/images/lightbulb2.png")}
                                resizeMode="contain"
                            />
                            <Text style={styles.helpPhaseText}>Happy brainstorming!</Text>
                        </View>
                        </View>
                        <View style={{ height: 20 }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}