import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../../Screens/SignIn';
import SignUp from '../../Screens/SignUp';

//AuthStack
const authStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerShown: false,
      },
    },

    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: 'SignIn'},
);

export default authStack;
