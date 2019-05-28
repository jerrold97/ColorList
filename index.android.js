/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'

import { StackNavigator  } from 'react-navigation'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
const App = StackNavigator ({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo }
  });

// class App extends Component {
//   render() {
//     return (
//       // <ColorList onColorSelected={color => Alert.alert(color)} />
//       <View><Text>Hello</Text></View>
//       )
//   }
// }

AppRegistry.registerComponent('ColorList', () => App);
