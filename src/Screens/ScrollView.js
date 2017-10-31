import React from "react";
import { ScrollView , StyleSheet, View } from "react-native";

const ScrollView = ({ children, ...rest }) => {
  retunr(
    <ScrollView style={styles.ScrollView} {...rest}> 
      <View style={{marginBottom:10}}> {children}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "orange",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default ScrollView;
