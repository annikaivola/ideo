import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Createbtn extends Component {
//   static navigationOptions = {
//     header:null
// };
_onPressButton() {
  Alert.alert('You tapped the button!')
}
    render() {
      return (
        <View style={styles.container}>
  
  <Button
              onPress={this._onPressButton}
              title="Create"
              color="gray"
            />
  
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