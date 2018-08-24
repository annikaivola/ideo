import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Createbtn extends Component {
  static navigationOptions
  render() {
    return (
      <View>
        {/* <Button style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('Ideafeed')
          }
          title="Log in to Ideaspace"
          color="#1ac5c3"

        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});