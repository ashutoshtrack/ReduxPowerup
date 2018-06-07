import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

class ProfileScreen extends Component {
  NextNavigate = () => {
    alert("Clicked");
    const { navigate } = this.props.navigation;

    navigate("Tabs", null);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Screen </Text>
        <Text>{this.props.count.count} </Text>

        <Button title="Add" onPress={() => this.props.doIncrement()} />

        <Button title="Next" onPress={this.NextNavigate} />
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
)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
