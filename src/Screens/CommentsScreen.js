import React from "react";
import { View, Animated } from "react-native";
import CommentScreen , { LoadingComment } from "./CommentScreen";

const LoadingComments = () => {
  return(
    <View>
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
      <LoadingComment />
    </View>
  )
}

class CommentsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      springValue: new Animated.Value(0.9)
    }
  }

  spring = () => {
    this.state.springValue.setValue(0.9);
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 10
    }).start();
  }

  componentDidMount() {
    this.spring();
  }

  render(){
    if (this.props.loading) return <LoadingComments />;
    else if (this.props.item && this.props.item.comments) {
      return (
        <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
        {this.props.item.comments.map(( comment, i ) => {
          return <CommentScreen data={comment} key={i} />
        })}
        </Animated.View>
      )
    }
    return <LoadingComments />
  }
}

export default CommentsScreen;
