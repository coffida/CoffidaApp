import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Favourite from '../../Screens/MyFav';
const Favourites = createStackNavigator(
  {
    Favourite: {
      screen: Favourite,
      navigationOptions: {
        headerShown: false,
      },
    },
    // Messages: {
    //   screen: Messages,
    //   navigationOptions: {
    //     headerShown: false,
    //   },
    // },

    // GenerateTrip: {
    //   screen: GenerateTrip,
    //   navigationOptions: {
    //     headerShown: false,
    //   },
    // },

    // Trip: {
    //   screen: Trip,

    //   navigationOptions: {
    //     headerShown: false,
    //   },
    // },
  },

  {initialRouteName: 'Favourite'},
);

export default Favourites;
