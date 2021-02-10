import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../../Screens/Profile';
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {initialRouteName: 'Profile'},
);

export default ProfileStack;
