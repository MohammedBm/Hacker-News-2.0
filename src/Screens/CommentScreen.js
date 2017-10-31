import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { loadingParams, createRepeatingFadeAnimation } from '../Config/anime'
import CommentsScreen from './Comments'
import CardScreen from './CardScreen'
import { removeHTML } from "../Config/helprs";

class LoadingComment extends React.Component {
  constructor(props) {
    super(props)

    this.state = { fadeAnim: new Animated.Value(0) }
  }

  animatedLoading = () => {
    createRepeatingFadeAnimation(
      this.state.fadeAnim,
      loadingParams.iterationDuration,
      loadingParams.minOpacity,
      loadingParams.maxOpacity,
      loadingParams.iterations
    ).start()
  };
  
  componentDidMount() {
    this.animatedLoading();
  }

  render(){
    return(
      <View style={styles.comment}>
        <CardScreen>
          <View style={styles.commentContainer}>
          
            <Animated.View 
              style={StyleSheet.flatten([styles.loadingCommentText, { opacity: this.state.fadeAnim } ])}
            />
            <Animated.View 
              style={StyleSheet.flatten([styles.loadingCommentText, { opacity: this.state.fadeAnim } ])}
            />
            <Animated.View 
              style={StyleSheet.flatten([styles.loadingCommentText, { opacity: this.state.fadeAnim } ])}
            />
            <Animated.View 
              style={StyleSheet.flatten([styles.loadingCommentText, { opacity: this.state.fadeAnim } ])}
            />

            <View style={styles.info}>

              <View style={styles.loadingInfoContainer}>
                <Animated.View 
                  style={StyleSheet.flatten([ styles.loadingInfoText, { opacity: this.state.fadeAnim } ])}
                />
              </View>
              
              <View style={styles.loadingInfoContainer}>
                <Animated.View 
                  style={StyleSheet.flatten([ styles.loadingInfoText, { opacity: this.state.fadeAnim } ])}
                />
              </View>
              
              <View style={styles.loadingInfoContainer}>
                <Animated.View 
                  style={StyleSheet.flatten([ styles.loadingInfoText, { opacity: this.state.fadeAnim } ])}
                />
              </View>
              
            </View>
          </View>
        </CardScreen>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  commentContainer: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    flex: 1
  },
  comment: {
    marginLeft: 4
    // marginRight: 1,
  },
  commentText: {
    fontSize: 16
  },
  loadingCommentText: {
    // flex: 1,
    height: 15,
    backgroundColor: "grey",
    marginTop: 2,
    marginBottom: 2,
    opacity: 0.2
  },
  loadingInfoText: {
    height: 15,
    backgroundColor: "grey",
    marginTop: 2,
    marginBottom: 2,
    opacity: 0.2,
    marginLeft: 2,
    marginRight: 2
  },
  info: {
    flexDirection: "row",
    flex: 1,
    borderTopColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 7,
    paddingTop: 7
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  infoText: {
    fontSize: 14
  },
  loadingInfoContainer: {
    flex: 1
  }
});
