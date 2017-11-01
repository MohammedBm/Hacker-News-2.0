import React from 'react';
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import Story from "./src/Screens/Story";
import Headlines from "./src/Screens/HeadlinesScreen";
import storiesStore from "./src/Store/Stories";
import AppStatusBar from "./src/Config/StatusBar";
import MyScreen from "./src/Screens/MyScreen";

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <AppStatusBar /> */}
        <Route />
      </View>
    )
  }
}

export const Route = StackNavigator({
  Home: {
    screen: MyScreen ,
    path: 'home',
    navigationOptions: () => ({
      title: `Home`
    })  
  },
  Story: {
    screen: Story,
    path: 'home/:story',
    navigationOptions: () => ({
      title: `Story`
    })  

  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
