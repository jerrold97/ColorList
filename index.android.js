/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Alert
} from 'react-native'

import ColorList from './components/ColorList'

class App extends Component {
  render() {
    return (
      <ColorList onColorSelected={color => Alert.alert(color)} />
      )
  }
}

AppRegistry.registerComponent('ColorList', () => App);
