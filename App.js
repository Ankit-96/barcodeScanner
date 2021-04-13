/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import RootRouter from './routes/RootRouter'

class App extends Component {
  render() {
    return <RootRouter />
  }
}

export default App
