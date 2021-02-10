import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MyReview from '../../Screens/MyReview';
import EditReview from '../../Screens/EditReview';

const ReviewStack = createStackNavigator(
  {
    MyReview: {
      screen: MyReview,
      navigationOptions: {
        headerShown: false,
      },
    },

    'Edit Review': {
      screen: EditReview,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {initialRouteName: 'MyReview'},
);

export default ReviewStack;
