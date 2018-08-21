import React, {Component} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class ChooseCreate extends Component {
    static navigationOptions = {
        header:null
    };
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Create new Ideaspace"
              color="#841584"
            />
            </View>
            </View>
      )
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
