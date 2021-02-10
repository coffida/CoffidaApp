import React, {Component} from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Content from './Content';
// import {home, group} from '../../assets';
import theme from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from '../../screens/Profile';
import ProfileStack from '../Stacks/ProfileStack';
import MyBusniessStack from '../Stacks/MyBusniessStack';
import Tabs from '../Tabs';
import Setting from '../../screens/Setting';
import SubscriptionStack from '../Stacks/SubscriptionStack';
import Reward from '../../screens/Reward';
import SubscriptionPlan from '../../screens/SubscriptionPlan';
import EditProfile from '../../screens/EditProfile';
import BusniessDetails from '../Stacks/BusniessDetails';
import MyEmployer from '../../screens/MyEmployer';
const drawerNav = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="adduser" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="adduser" size={24} color={tintColor} />
        ),
      },
    },

    Setting: {
      screen: Setting,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="setting" size={24} color={tintColor} />
        ),
      },
    },
    'My Busniess': {
      screen: MyBusniessStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="business-center" color="lightgrey" size={24} />
        ),
      },
    },
    'My Employer': {
      screen: MyEmployer,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="business-center" color="lightgrey" size={24} />
        ),
      },
    },
    'Busniess Detail': {
      screen: BusniessDetails,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="business-center" color="lightgrey" size={24} />
        ),
      },
    },
    'Subscription Plan': {
      screen: SubscriptionPlan,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="card-membership" size={24} color={tintColor} />
        ),
      },
    },

    Reward: {
      screen: Reward,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Entypo name="trophy" size={24} color={tintColor} />
        ),
      },
    },

    Subscription: {
      screen: SubscriptionStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="card-membership" size={24} color={tintColor} />
        ),
      },
    },
    'Edit Profile': {
      screen: EditProfile,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="adduser" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerLockMode: 'unlocked',
    drawerType: 'front',
    drawerBackgroundColor: 'white',
    drawerPosition: 'left',
    contentComponent: Content,
    contentOptions: {
      activeTintColor: '#f1f1f1',
      inactiveTintColor: '#f1f1f1',
      activeBackgroundColor: '#FF613C',
    },
  },
);

export default drawerNav;
