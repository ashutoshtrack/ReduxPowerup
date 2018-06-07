import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../component/HomeScreen";
import ProfileScreen from "../component/ProfileScreen";
import NestedScreen from "../component/TabComponents/NestedScreen";
import SubNestedScreen from "../component/TabComponents/SubNestedScreen";

const TabsStack = createBottomTabNavigator({
  TabOne: { screen: NestedScreen },
  TabTwo: { screen: SubNestedScreen }
});

export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Profile: { screen: ProfileScreen },
  Tabs: { screen: TabsStack }
});
