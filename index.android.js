/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import { StackNavigator  } from 'react-navigation'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'
const App = StackNavigator ({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo },
  Web: { screen: WebPage }
  });

// class App extends Component {
//   render() {
//     return (
//       // <ColorList onColorSelected={color => Alert.alert(color)} />
//       <Navigator
//       initialRoute={{ name: 'Color List' }}
//       renderScene={(route, navigator) => {
//           switch(route.name) {
//             case 'Color Info' :
//                 return <ColorInfo backgroundColor={route.color}
//                         onSelect={() => navigator.pop()} />
//             default :
//                 return <ColorList onColorSelected={
//                   (color) => navigator.push({
//                     name: 'Color Info',
//                     color
//                     })
//                   }/>
//           }
//         }} />
//       )
//   }
// }

AppRegistry.registerComponent('ColorList', () => App);
