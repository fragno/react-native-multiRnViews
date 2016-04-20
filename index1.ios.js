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
  NavigatorIOS
} from 'react-native';

class NavigatorIOSExample1 extends Component {
  constructor(props) {
    super(props);
    this.title = 'NavigatorIOS1';
    this.description = 'iOS navigation capabilities';
  }

  render() {
    return(
      <NavigatorIOS
          style={styles.container}
          ref='nav'
          initialRoute={{
            title: this.title,
            component: HelloWorld1,
            rightButtonTitle: 'Hello',
            onRightButtonPress: () => {
              this.refs.nav.push({
                title: this.title,
                component: HelloWorld1,
                leftButtonTitle: '<',
                rightButtonTitle: 'Hello',
                onLeftButtonPress: () => {
                  this._handleLeftButtonPress()
                },
                onRightButtonPress: () => {
                  this._handleRightButtonPress()
                }
              });
            }
          }}
          itemWrapperStyle={styles.itemWrapper}
          tintColor='#008888'
      />
    );
  }

  _handleLeftButtonPress() {
    this.refs.nav.pop();
  }

  _handleRightButtonPress() {
    this.refs.nav.push({
      title: this.title,
      component: HelloWorld1,
      leftButtonTitle: '<',
      rightButtonTitle: 'Hello',
      onLeftButtonPress: () => {
        this._handleLeftButtonPress()
      },
      onRightButtonPress: () => {
        this._handleRightButtonPress()
      }
    });
  }
}

class HelloWorld1 extends Component {
  constructor(props) {
    super(props);
    this.state = { helloStr : 'hello', worldStr : 'world' };
    this.onPress = this.onPress.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount')
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
        <Text style={styles.instructions} onPress={this.onPress}>
          Press Me  {this.state.helloStr + ' ' + this.state.worldStr + '\n'}
        </Text>
      </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps' + nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate' + nextProps + nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
   console.log('componentWillUnmount')
  }

  onPress() {
    this.setState({
      helloStr : 'hello rn'
    });
  }
}

HelloWorld1.propType = { helloStr : React.PropTypes.string, worldStr : React.PropTypes.string }
HelloWorld1.defaultProps = { helloStr : 'hellodefault', worldStr : 'worlddefault' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigatorIOSExample1', () => NavigatorIOSExample1);
