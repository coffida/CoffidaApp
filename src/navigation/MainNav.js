import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
// import Splash from '../screens/Splash';

//Stacks
import AuthStack from './Stacks/AuthStack';
// import DrawerNav from './Drawer';
import BottomTab from './Tabs';

const AppNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    App: {
      screen: BottomTab,
      // screen: TabScreen,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(AppNavigator);
