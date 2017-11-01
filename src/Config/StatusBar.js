import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'
import  COLORS  from './colors'

class AppStatusBar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: COLORS.main,
          height: Constants.statusBarHeight
        }}
      >
        <StatusBar barStyle='light-content' />
      </View>
    )
  }
}

export default AppStatusBar
