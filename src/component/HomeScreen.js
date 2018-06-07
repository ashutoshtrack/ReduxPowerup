import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class HomeScreen extends Component {
  /* state = {
    count: 0
  };
 */
  componentWillMount() {
    console.log("Component will Mount");
  }

  componentWillReceiveProps() {
    console.log("component will recieve props");
  }

  componentWillUpdate() {
    console.log("component will update");
  }
  componentWillUnmount() {
    console.log("component Willl Unmount");
  }

  //Add Counter

  AddHandler = () => {
    //alert("add");
    /*    let count = this.state.count + 1;

    this.setState({ count }); */

    this.props.doIncrement();
  };

  // Delete Counter

  DeleteHandler = () => {
    /*   let count = this.state.count - 1;

    this.setState({ count }); */

    this.props.doDecrement();
  };

  NextNavigate = () => {
    const { navigate } = this.props.navigation;

    navigate("Profile", { name: "Jane" });
  };

  render() {
    //   var { count } = this.state;

    let { count } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Counter: {count.count} </Text>

        <Button title="Add" onPress={this.AddHandler} />
        <Button title="Subtract " onPress={this.DeleteHandler} />
        <Button title="Next" onPress={this.NextNavigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

mapStateToProps = state => {
  return { count: state.countPointer };
};

export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
