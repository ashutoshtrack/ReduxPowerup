import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NestedScreen extends Component {
  render() {
    return (
      <View>
        <Text> First Screen {this.props.count.count} </Text>
      </View>
    );
  }
}
mapStateToProps = state => {
  return { count: state.countPointer };
};

export default connect(
  mapStateToProps,
  actions
)(NestedScreen);
