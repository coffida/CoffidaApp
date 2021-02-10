import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import all tabs
import homestack from '../Stacks/HomeStack';
import Favourites from '../Stacks/FavStack';
import ProfileStack from '../Stacks/ProfileStack';
import MyReview from '../Stacks/ReviewStack';
//tab icons

// import styles from '../../screens/Home/styles';
import theme from '../../theme';

const bottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: homestack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    'My Reviews': {
      screen: MyReview,
      navigationOptions: {
        headerShown: false,
      },
    },
    'My Favourites': {
      screen: Favourites,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            return <MaterialIcons name="home" size={25} color={tintColor} />;
          case 'Profile':
            return (
              <View>
                <AntDesign name="profile" size={30} color={tintColor} />
              </View>
            );

          case 'My Reviews':
            return (
              <MaterialIcons name="rate-review" size={25} color={tintColor} />
            );
          case 'My Favourites':
            return (
              <View>
                <MaterialIcons name="favorite" size={30} color={tintColor} />
              </View>
            );

          default:
            iconName;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: theme.colors.lightGray,
      style: {
        borderTopColor: theme.colors.lightGray,
        backgroundColor: 'white',
      },
      // showLabel: false,
    },
  },
);

export default bottomTab;
