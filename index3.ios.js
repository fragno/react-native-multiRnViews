/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var RCTDeviceEventEmitter = require("RCTDeviceEventEmitter")

class AwesomeProject extends Component {

  componentDidMount() {
    this.listener = RCTDeviceEventEmitter.addListener("refreshData", function(text){
      console.log(text);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions} onPress={() => {console.log("pressed")}}>
          Click Me!
        </Text>
        <Text style={styles.instructions} onPress={() => {console.log("pressed")}}>
          Click Me 2!
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    this.listener.remove()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('222', () => AwesomeProject);
