import React from 'react';
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import { navigationOptions } from "../Config/Navigation"
import Headlines from "./HeadlinesScreen";
import storiesStore from "../Store/Stories";
import Story from "./Story";

export default class MyScreen extends React.Component {
  static navigationOptions = {
    title: "React Native Hacker News",
    ...navigationOptions
  };

  navigateToStory = id => {
    const { navigate } = this.props.navigation;
    navigate("Story", { id });
  };
  render() {
    return (
      <View style={styles.container}>
        <Headlines
          storiesStore={storiesStore}
          navigateToStory={this.navigateToStory}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {  
    flex: 1
  }
});
