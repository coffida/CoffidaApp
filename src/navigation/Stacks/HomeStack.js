import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
// import Profile from '../../Screens/Profile';
// import drawerNav from '../Drawer';
import Home from '../../Screens/Home';
import CoffeeDetail from '../../Screens/CoffeeDetail';
import AddReview from '../../Screens/AddReview';
import Opencamera from '../../Screens/Opencamera';
//AuthStack
const homestack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Opencamera: {
      screen: Opencamera,
      navigationOptions: {
        headerShown: false,
      },
    },
    'Coffee Detail': {
      screen: CoffeeDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
    'Add Review': {
      screen: AddReview,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: 'Home'},
);

export default homestack;
